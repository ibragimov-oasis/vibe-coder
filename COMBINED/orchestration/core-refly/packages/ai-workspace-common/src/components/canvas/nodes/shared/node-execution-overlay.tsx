import { memo } from 'react';
import cn from 'classnames';
import { BorderBeam } from '../../../magicui/border-beam';
import { ActionStatus } from '@refly/openapi-schema';

interface NodeExecutionOverlayProps {
  status: ActionStatus;
  className?: string;
}

/**
 * Component to display execution overlay for nodes with different states
 */
export const NodeExecutionOverlay = memo(({ status, className }: NodeExecutionOverlayProps) => {
  if (!status) {
    return null;
  }

  const getOverlayConfig = () => {
    switch (status) {
      case 'waiting':
        return 'bg-refly-bg-content-z2 opacity-70 border-dashed border-refly-Card-Border';
      case 'executing':
        return 'border-[1px] border-solid border-refly-primary-default shadow-[0_0_0_4px_var(--refly-primary-light)]';
      case 'finish':
      case 'failed':
        return null;
      default:
        return null;
    }
  };

  const config = getOverlayConfig();
  if (!config) {
    return null;
  }

  return (
    <div className={cn('absolute inset-0 rounded-2xl z-10', config, className)}>
      {status === 'executing' && (
        <BorderBeam
          size={50}
          duration={3}
          colorFrom="var(--refly-primary-default)"
          colorTo="var(--refly-primary-default)"
          className="rounded-2xl"
        />
      )}
    </div>
  );
});

NodeExecutionOverlay.displayName = 'NodeExecutionOverlay';
