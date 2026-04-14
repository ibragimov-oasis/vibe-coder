import { describe, it, expect } from 'vitest';
import { getYYYYMM, getYYYYMMDD } from './time';

describe('time utilities', () => {
  describe('getYYYYMM', () => {
    it('should format date to YYYYMM format', () => {
      const date = new Date(2024, 0, 15); // January 15, 2024
      expect(getYYYYMM(date)).toBe('202401');
    });

    it('should handle single digit months correctly', () => {
      const date = new Date(2024, 8, 15); // September 15, 2024 (month 8, 0-indexed)
      expect(getYYYYMM(date)).toBe('202409');
    });

    it('should handle double digit months correctly', () => {
      const date = new Date(2024, 11, 15); // December 15, 2024 (month 11, 0-indexed)
      expect(getYYYYMM(date)).toBe('202412');
    });

    it('should handle year boundary correctly', () => {
      const date = new Date(2023, 11, 31); // December 31, 2023
      expect(getYYYYMM(date)).toBe('202312');
    });

    it('should handle leap year correctly', () => {
      const date = new Date(2024, 1, 29); // February 29, 2024 (leap year)
      expect(getYYYYMM(date)).toBe('202402');
    });

    it('should handle different years correctly', () => {
      const date1999 = new Date(1999, 0, 1); // January 1, 1999
      const date2050 = new Date(2050, 5, 15); // June 15, 2050

      expect(getYYYYMM(date1999)).toBe('199901');
      expect(getYYYYMM(date2050)).toBe('205006');
    });
  });

  describe('getYYYYMMDD', () => {
    it('should format date to YYYYMMDD format', () => {
      const date = new Date(2024, 0, 15); // January 15, 2024
      expect(getYYYYMMDD(date)).toBe('20240115');
    });

    it('should handle single digit months and days correctly', () => {
      const date = new Date(2024, 0, 5); // January 5, 2024
      expect(getYYYYMMDD(date)).toBe('20240105');
    });

    it('should handle double digit months and days correctly', () => {
      const date = new Date(2024, 11, 25); // December 25, 2024
      expect(getYYYYMMDD(date)).toBe('20241225');
    });

    it('should handle year boundary correctly', () => {
      const date = new Date(2023, 11, 31); // December 31, 2023
      expect(getYYYYMMDD(date)).toBe('20231231');
    });

    it('should handle leap year correctly', () => {
      const date = new Date(2024, 1, 29); // February 29, 2024 (leap year)
      expect(getYYYYMMDD(date)).toBe('20240229');
    });

    it('should handle different years correctly', () => {
      const date1999 = new Date(1999, 0, 1); // January 1, 1999
      const date2050 = new Date(2050, 5, 15); // June 15, 2050

      expect(getYYYYMMDD(date1999)).toBe('19990101');
      expect(getYYYYMMDD(date2050)).toBe('20500615');
    });

    it('should handle edge case of first day of month', () => {
      const date = new Date(2024, 2, 1); // March 1, 2024
      expect(getYYYYMMDD(date)).toBe('20240301');
    });

    it('should handle edge case of last day of month', () => {
      const date = new Date(2024, 1, 28); // February 28, 2024 (non-leap year)
      expect(getYYYYMMDD(date)).toBe('20240228');
    });
  });

  describe('edge cases and validation', () => {
    it('should handle invalid dates gracefully', () => {
      const invalidDate = new Date('invalid-date');
      // JavaScript Date constructor doesn't throw for invalid strings
      // It creates a Date object with NaN values, which results in "NaNNaN" or "NaNNaNNaN"
      expect(getYYYYMM(invalidDate)).toBe('NaNNaN');
      expect(getYYYYMMDD(invalidDate)).toBe('NaNNaNNaN');
    });

    it('should handle very old dates', () => {
      const oldDate = new Date(1900, 0, 1); // January 1, 1900
      expect(getYYYYMM(oldDate)).toBe('190001');
      expect(getYYYYMMDD(oldDate)).toBe('19000101');
    });

    it('should handle very future dates', () => {
      const futureDate = new Date(2100, 11, 31); // December 31, 2100
      expect(getYYYYMM(futureDate)).toBe('210012');
      expect(getYYYYMMDD(futureDate)).toBe('21001231');
    });
  });
});
