import { memo, useEffect } from 'react';

import { AppManager } from '@refly-packages/ai-workspace-common/components/app-manager';
import { logEvent } from '@refly/telemetry-web';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const AppManagerPage = memo(() => {
  const { t } = useTranslation();
  useEffect(() => {
    logEvent('enter_workflow_list');
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('loggedHomePage.siderMenu.appManager')}</title>
      </Helmet>
      <AppManager />
    </>
  );
});

AppManagerPage.displayName = 'AppManagerPage';

export default AppManagerPage;
