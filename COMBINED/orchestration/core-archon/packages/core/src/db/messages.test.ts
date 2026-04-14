import { mock, describe, test, expect, beforeEach } from 'bun:test';
import { createQueryResult, mockPostgresDialect } from '../test/mocks/database';
import type { MessageRow } from './messages';

const mockQuery = mock(() => Promise.resolve(createQueryResult([])));

// Mock the connection module before importing the module under test
mock.module('./connection', () => ({
  pool: {
    query: mockQuery,
  },
  getDialect: () => mockPostgresDialect,
}));

import { addMessage, listMessages } from './messages';

describe('messages', () => {
  beforeEach(() => {
    mockQuery.mockClear();
  });

  const mockMessage: MessageRow = {
    id: 'msg-123',
    conversation_id: 'conv-456',
    role: 'user',
    content: 'Hello, world!',
    metadata: '{}',
    created_at: '2025-01-01T00:00:00.000Z',
  };

  describe('addMessage', () => {
    test('calls pool.query with correct SQL and parameters', async () => {
      mockQuery.mockResolvedValueOnce(createQueryResult([mockMessage]));

      const result = await addMessage('conv-456', 'user', 'Hello, world!');

      expect(result).toEqual(mockMessage);
      expect(mockQuery).toHaveBeenCalledWith(
        `INSERT INTO remote_agent_messages (conversation_id, role, content, metadata, created_at)
     VALUES ($1, $2, $3, $4, NOW())
     RETURNING *`,
        ['conv-456', 'user', 'Hello, world!', '{}']
      );
    });

    test('includes metadata as JSON string when provided', async () => {
      const messageWithMetadata: MessageRow = {
        ...mockMessage,
        metadata: '{"toolCalls":[{"name":"read"}],"error":null}',
      };
      mockQuery.mockResolvedValueOnce(createQueryResult([messageWithMetadata]));

      const metadata = { toolCalls: [{ name: 'read' }], error: null };
      const result = await addMessage('conv-456', 'assistant', 'Done.', metadata);

      expect(result).toEqual(messageWithMetadata);
      expect(mockQuery).toHaveBeenCalledWith(expect.any(String), [
        'conv-456',
        'assistant',
        'Done.',
        JSON.stringify(metadata),
      ]);
    });

    test('defaults metadata to empty object when not provided', async () => {
      mockQuery.mockResolvedValueOnce(createQueryResult([mockMessage]));

      await addMessage('conv-456', 'user', 'Hello, world!');

      expect(mockQuery).toHaveBeenCalledWith(expect.any(String), expect.arrayContaining(['{}']));
    });

    test('throws wrapped error when INSERT returns no rows', async () => {
      mockQuery.mockResolvedValueOnce(createQueryResult([]));

      await expect(addMessage('conv-456', 'user', 'Hello')).rejects.toThrow(
        'Failed to persist message: INSERT returned no rows (conversation: conv-456)'
      );
    });

    test('propagates query errors', async () => {
      mockQuery.mockRejectedValueOnce(new Error('connection refused'));

      await expect(addMessage('conv-456', 'user', 'Hello')).rejects.toThrow('connection refused');
    });
  });

  describe('listMessages', () => {
    test('returns rows from query result', async () => {
      const messages: MessageRow[] = [
        mockMessage,
        { ...mockMessage, id: 'msg-124', role: 'assistant', content: 'Hi!' },
      ];
      mockQuery.mockResolvedValueOnce(createQueryResult(messages));

      const result = await listMessages('conv-456');

      expect(result).toEqual(messages);
      expect(mockQuery).toHaveBeenCalledWith(
        `SELECT * FROM remote_agent_messages
     WHERE conversation_id = $1
     ORDER BY created_at ASC
     LIMIT $2`,
        ['conv-456', 200]
      );
    });

    test('returns empty array for no results', async () => {
      mockQuery.mockResolvedValueOnce(createQueryResult([]));

      const result = await listMessages('conv-456');

      expect(result).toEqual([]);
    });

    test('respects custom limit parameter', async () => {
      mockQuery.mockResolvedValueOnce(createQueryResult([]));

      await listMessages('conv-456', 50);

      expect(mockQuery).toHaveBeenCalledWith(expect.any(String), ['conv-456', 50]);
    });
  });
});
