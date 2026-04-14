import React, { memo } from 'react';
import { Skeleton } from 'antd';

interface TemplateCardSkeletonProps {
  className?: string;
}

export const TemplateCardSkeleton: React.FC<TemplateCardSkeletonProps> = memo(({ className }) => {
  return (
    <div
      className={`${className} m-2 flex flex-col group relative bg-refly-bg-content-z2 rounded-xl overflow-hidden border-[0.5px] border-solid border-refly-Card-Border h-[245px]`}
    >
      {/* Image skeleton */}
      <div className="h-40 bg-gray-100 dark:bg-gray-700 flex items-center justify-center" />

      <div className="p-4 flex-1 flex flex-col justify-between gap-1">
        <Skeleton.Input
          active
          size="small"
          style={{
            width: '80%',
            height: '20px',
            borderRadius: '4px',
          }}
        />

        <Skeleton.Input
          active
          size="small"
          style={{
            width: '100%',
            height: '12px',
            borderRadius: '2px',
          }}
        />
      </div>
    </div>
  );
});

TemplateCardSkeleton.displayName = 'TemplateCardSkeleton';
