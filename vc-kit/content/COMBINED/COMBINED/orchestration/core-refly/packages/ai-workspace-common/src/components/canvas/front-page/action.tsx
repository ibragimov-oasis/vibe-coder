import { Button, Tooltip } from 'antd';
import { memo, useMemo, useRef, useCallback } from 'react';
import { Send } from 'refly-icons';
import { useTranslation } from 'react-i18next';
import { useUserStoreShallow } from '@refly/stores';
import { getRuntime } from '@refly/utils/env';
import { ModelSelector } from '@refly-packages/ai-workspace-common/components/canvas/launchpad/chat-actions/model-selector';
import { ModelInfo, GenericToolset } from '@refly/openapi-schema';
import { cn } from '@refly/utils/index';
import { SkillRuntimeConfig } from '@refly/openapi-schema';
import { useChatStoreShallow } from '@refly/stores';
import { ToolSelectorPopover } from '@refly-packages/ai-workspace-common/components/canvas/launchpad/tool-selector-panel';

export interface CustomAction {
  content?: string;
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

interface ActionsProps {
  query: string;
  model: ModelInfo | null;
  setModel: (model: ModelInfo | null) => void;
  runtimeConfig: SkillRuntimeConfig;
  setRuntimeConfig: (runtimeConfig: SkillRuntimeConfig) => void;
  className?: string;
  handleSendMessage: () => void;
  handleAbort: () => void;
  customActions?: CustomAction[];
  loading?: boolean;
  isExecuting?: boolean;
  selectedToolsets?: GenericToolset[];
  onSelectedToolsetsChange?: (toolsets: GenericToolset[]) => void;
}

export const Actions = memo(
  (props: ActionsProps) => {
    const {
      query,
      model,
      setModel,
      handleSendMessage,
      handleAbort,
      customActions,
      className,
      loading = false,
      isExecuting = false,
      selectedToolsets,
      onSelectedToolsetsChange,
    } = props;
    const { t } = useTranslation();

    // hooks
    const isWeb = getRuntime() === 'web';

    const userStore = useUserStoreShallow((state) => ({
      isLogin: state.isLogin,
    }));
    const { chatMode } = useChatStoreShallow((state) => ({
      chatMode: state.chatMode,
      setChatMode: state.setChatMode,
    }));

    const isPilotActivated = useMemo(() => chatMode === 'agent', [chatMode]);

    const canSendEmptyMessage = useMemo(() => query?.trim(), [query]);
    const canSendMessage = useMemo(
      () => !userStore.isLogin || canSendEmptyMessage,
      [userStore.isLogin, canSendEmptyMessage],
    );

    // Create a pilot session or directly send message
    const handleSend = useCallback(() => {
      if (!canSendMessage) return;
      handleSendMessage();
    }, [canSendMessage, handleSendMessage]);

    const containerRef = useRef<HTMLDivElement>(null);

    return (
      <div className={cn('flex justify-between items-center', className)} ref={containerRef}>
        <div className="flex items-center">
          {userStore.isLogin && !isPilotActivated && (
            <div className="mr-2">
              <ModelSelector
                model={model}
                setModel={setModel}
                size="medium"
                briefMode={false}
                trigger={['click']}
              />
            </div>
          )}

          {userStore.isLogin && chatMode === 'ask' && (
            <ToolSelectorPopover
              selectedToolsets={selectedToolsets}
              onSelectedToolsetsChange={onSelectedToolsetsChange}
            />
          )}
        </div>
        <div className="flex flex-row items-center gap-2">
          {customActions?.map((action, index) => (
            <Tooltip title={action.title} key={index}>
              <Button size="small" icon={action.icon} onClick={action.onClick} className="mr-0">
                <span className="text-xs">{action?.content || ''}</span>
              </Button>
            </Tooltip>
          ))}

          {!isWeb ? null : isExecuting ? (
            <Button
              type="default"
              className="items-center gap-1 border-red-200 text-red-600 hover:border-red-300 hover:text-red-700 dark:border-red-800 dark:text-red-400 dark:hover:border-red-700 dark:hover:text-red-300 dark:bg-red-950 dark:hover:bg-red-900"
              onClick={handleAbort}
            >
              <span>{t('copilot.chatActions.stop')}</span>
            </Button>
          ) : (
            <Button
              type="primary"
              disabled={!canSendMessage}
              className="flex items-center !h-9 !w-9 rounded-full border-none"
              onClick={handleSend}
              loading={loading}
              icon={<Send size={20} color="white" />}
            />
          )}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.handleSendMessage === nextProps.handleSendMessage &&
      prevProps.handleAbort === nextProps.handleAbort &&
      prevProps.query === nextProps.query &&
      prevProps.runtimeConfig === nextProps.runtimeConfig &&
      prevProps.setRuntimeConfig === nextProps.setRuntimeConfig &&
      prevProps.model === nextProps.model &&
      prevProps.loading === nextProps.loading &&
      prevProps.isExecuting === nextProps.isExecuting &&
      prevProps.customActions === nextProps.customActions &&
      prevProps.selectedToolsets === nextProps.selectedToolsets &&
      prevProps.onSelectedToolsetsChange === nextProps.onSelectedToolsetsChange
    );
  },
);

Actions.displayName = 'Actions';
