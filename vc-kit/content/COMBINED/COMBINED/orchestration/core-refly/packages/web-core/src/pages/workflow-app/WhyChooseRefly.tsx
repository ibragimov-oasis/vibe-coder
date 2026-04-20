import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '@refly-packages/ai-workspace-common/components/common/logo';
import sectionBg from '../../assets/images/section.png';

const WhyChooseRefly: React.FC = memo(() => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('whyChooseRefly.features.everyoneCanUse.title'),
      description: t('whyChooseRefly.features.everyoneCanUse.description'),
    },
    {
      title: t('whyChooseRefly.features.configureOnce.title'),
      description: t('whyChooseRefly.features.configureOnce.description'),
    },
    {
      title: t('whyChooseRefly.features.contextPreserved.title'),
      description: t('whyChooseRefly.features.contextPreserved.description'),
    },
    {
      title: t('whyChooseRefly.features.directDelivery.title'),
      description: t('whyChooseRefly.features.directDelivery.description'),
    },
    {
      title: t('whyChooseRefly.features.distributable.title'),
      description: t('whyChooseRefly.features.distributable.description'),
    },
    {
      title: t('whyChooseRefly.features.moreFeatures.title'),
      description: t('whyChooseRefly.features.moreFeatures.description'),
      isSpecial: true,
    },
  ];

  return (
    <div className="w-full max-w-[860px] mx-auto mt-[50px] md:mt-[50px] mb-[50px] px-4">
      {/* Main container with responsive dimensions */}
      <div
        className="relative w-full rounded-2xl overflow-hidden flex flex-col items-center"
        style={{
          padding: '40px 0px 20px',
          gap: '24px',
        }}
      >
        {/* Light mode background */}
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            borderRadius: '16px',
            background:
              'linear-gradient(101deg, rgba(169, 255, 226, 0.08) 0%, rgba(10, 193, 142, 0.08) 100%), #FFF',
          }}
        />

        {/* Dark mode background */}
        <div
          className="absolute inset-0 dark:block hidden"
          style={{
            borderRadius: '16px',
            background:
              'linear-gradient(101deg, rgba(169, 255, 226, 0.12) 0%, rgba(10, 193, 142, 0.12) 100%), #1a1a1a',
          }}
        />

        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${sectionBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Background decoration - responsive positioning */}
        <div
          className="absolute opacity-60 hidden md:block"
          style={{
            left: '-103px',
            top: '0',
            width: '1338px',
            height: '562px',
          }}
        />

        {/* Content container - responsive dimensions */}
        <div
          className="relative z-10 flex flex-col items-center w-full"
          style={{
            padding: '0px 20px',
            gap: '12px',
          }}
        >
          {/* Header section */}
          <div
            className="flex flex-col items-center w-full"
            style={{
              gap: '12px',
              padding: '0px 0px 20px',
            }}
          >
            <Logo />

            {/* Title - responsive typography */}
            <h2
              className="text-center text-gray-900 dark:text-gray-100"
              style={{
                fontFamily: 'PingFang SC',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '1.5555555555555556em',
              }}
            >
              {t('whyChooseRefly.title')}
            </h2>
          </div>

          {/* Features grid - responsive layout */}
          <div
            className="flex flex-wrap justify-stretch items-stretch w-full"
            style={{
              gap: '10px',
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center rounded-xl border shadow-sm w-full sm:w-[calc(50%-5px)] md:w-[calc(33.333%-7px)] h-[114px] sm:h-auto ${
                  feature.isSpecial
                    ? 'bg-white/75 dark:bg-gray-800/75 border-gray-100 dark:border-gray-700'
                    : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700'
                } dark:shadow-gray-900/20`}
                style={{
                  padding: '12px',
                  gap: '8px',
                }}
              >
                <h3
                  className="text-center text-green-600 dark:text-green-400 text-sm sm:text-base md:text-base"
                  style={{
                    fontFamily: 'PingFang SC',
                    fontWeight: feature.isSpecial ? 400 : 600,
                    lineHeight: '1.4',
                    textAlign: 'center',
                  }}
                >
                  {feature.title}
                </h3>
                {feature.description && (
                  <p
                    className="text-center whitespace-pre-line text-gray-800 dark:text-gray-200 text-xs sm:text-xs md:text-xs line-clamp-2"
                    style={{
                      fontFamily: 'PingFang SC',
                      fontWeight: 400,
                      lineHeight: '1.5',
                    }}
                  >
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

WhyChooseRefly.displayName = 'WhyChooseRefly';

export default WhyChooseRefly;
