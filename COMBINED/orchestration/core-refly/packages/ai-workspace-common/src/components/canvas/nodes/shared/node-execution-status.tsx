import { memo } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { ActionStatus } from '@refly/openapi-schema';
import { IoCheckmarkCircle } from 'react-icons/io5';

interface NodeExecutionStatusProps {
  status: ActionStatus;
  className?: string;
}

/**
 * Component to display node execution status with appropriate styling and animations
 */
export const NodeExecutionStatus = memo(({ status, className }: NodeExecutionStatusProps) => {
  const { t } = useTranslation();

  if (!status) {
    return null;
  }

  const getStatusConfig = () => {
    switch (status) {
      case 'waiting':
        return {
          text: t('canvas.workflow.run.nodeStatus.waiting') || 'Waiting',
          bgColor: 'bg-refly-bg-control-z0',
          textColor: 'text-refly-text-2',
        };
      case 'executing':
        return {
          text: t('canvas.workflow.run.nodeStatus.executing') || 'Running',
          bgColor: 'bg-refly-primary-light',
          textColor: 'text-refly-primary-default',
        };
      case 'finish':
        return {
          text: t('canvas.workflow.run.nodeStatus.finish') || 'Completed',
          bgColor: 'transparent',
        };
      case 'failed':
        return {
          text: t('canvas.workflow.run.nodeStatus.failed') || 'Failed',
          bgColor: 'bg-refly-Colorful-red-light',
          textColor: 'text-refly-func-danger-default',
        };
      default:
        return null;
    }
  };

  const config = getStatusConfig();
  if (!config) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'absolute top-2 right-2 z-10 px-1 leading-[16px] text-[10px] font-semibold rounded-[4px]',
        config.bgColor,
        config.textColor,
        className,
      )}
    >
      {status === 'finish' ? (
        <IoCheckmarkCircle className="w-4 h-4 text-refly-primary-default" />
      ) : (
        <div className="px-1 leading-[16px] text-[10px] font-semibold">{config.text}</div>
      )}
    </motion.div>
  );
});

NodeExecutionStatus.displayName = 'NodeExecutionStatus';
