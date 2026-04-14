import { memo } from 'react';
import { type NodeRelation } from './ArtifactRenderer';
import { useTranslation } from 'react-i18next';

// Video renderer component
const VideoRenderer = memo(
  ({
    node,
    isFullscreen = false,
    isMinimap = false,
  }: {
    node: NodeRelation;
    isFullscreen?: boolean;
    isMinimap?: boolean;
  }) => {
    const { t } = useTranslation();

    // Get video URL from node data
    const videoUrl = node.nodeData?.metadata?.videoUrl;
    const title = node.nodeData?.title || t('pages.components.video.defaultTitle');

    // If no video URL, show a prompt
    if (!videoUrl) {
      return (
        <div className="h-full flex items-center justify-center bg-white rounded p-3">
          <span className="text-gray-500">{t('pages.components.video.notFound')}</span>
        </div>
      );
    }

    return (
      <div
        className={`h-full bg-white dark:bg-gray-900 ${!isFullscreen ? 'rounded' : 'w-full'} ${
          isMinimap ? 'p-1' : ''
        }`}
      >
        <div className="h-full w-full overflow-hidden flex flex-col">
          {/* Video content area */}
          <div className="flex-1 overflow-auto p-4 dark:bg-gray-900">
            <div className="w-full h-full flex items-center justify-center">
              <video
                src={videoUrl}
                controls
                className="max-w-full max-h-full object-contain"
                preload="metadata"
                aria-label={title}
              >
                <track kind="captions" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export { VideoRenderer };
