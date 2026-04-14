import { memo, useState, useCallback } from 'react';
import cn from 'classnames';

interface HoverCardContainerProps {
  children: React.ReactNode;
  actionContent: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const HoverCardContainer = memo(
  ({ children, actionContent, className, onClick }: HoverCardContainerProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = useCallback(() => {
      onClick?.();
    }, [onClick]);

    const handleMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, []);

    const handleMouseOver = useCallback((e: React.MouseEvent) => {
      // Check if the mouse is over a child element that should prevent hover actions
      const target = e.target as HTMLElement;
      const isOverExcludedElement = target.closest('.prevent-hover-action');

      if (isOverExcludedElement) {
        setIsHovered(false);
      } else {
        setIsHovered(true);
      }
    }, []);

    const handleFocus = useCallback((e: React.FocusEvent) => {
      // Check if focus is on a child element that should prevent hover actions
      const target = e.target as HTMLElement;
      const isOverExcludedElement = target.closest('.prevent-hover-action');

      if (isOverExcludedElement) {
        setIsHovered(false);
      } else {
        setIsHovered(true);
      }
    }, []);

    return (
      <div
        className={cn('relative group overflow-hidden hover:shadow-refly-m', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        onFocus={handleFocus}
        onClick={handleClick}
      >
        {children}

        <div
          className={cn(
            'absolute bottom-[1px] left-[1px] right-[1px] flex items-center gap-2 py-3 px-4 rounded-xl transition-all duration-300 ease-in-out bg-refly-bg-glass-content backdrop-blur-[20px]',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
          )}
          style={{
            boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.08)',
          }}
        >
          {actionContent}
        </div>
      </div>
    );
  },
);

HoverCardContainer.displayName = 'HoverCardContainer';
