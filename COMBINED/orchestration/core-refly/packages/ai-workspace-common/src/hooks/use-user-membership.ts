import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserStoreShallow } from '@refly/stores';

/**
 * Hook to get user membership level information
 *
 * @returns Object containing membership level and related information
 */
export const useUserMembership = () => {
  const { t } = useTranslation();
  const userProfile = useUserStoreShallow((state) => state.userProfile);

  const membershipInfo = useMemo(() => {
    const planType = userProfile?.subscription?.planType || 'free';

    // Map plan types to display names
    const planTypeToDisplayName = t(`subscription.plans.${planType}.title`);

    return {
      planType,
      displayName: planTypeToDisplayName,
      isFree: planType === 'free',
      isSubscribed: planType !== 'free',
      subscription: userProfile?.subscription,
    };
  }, [userProfile?.subscription, t]);

  return membershipInfo;
};
