import React from 'react';
import { PageSection } from '@patternfly/react-core';
import { AppLayout } from 'use-patternfly';

export default () => {
  return (
    <AppLayout
      logo={'My app'}
      navVariant={'vertical'}
      navItems={[
        { to: '/samples/', title: 'Samples' },
        { to: '/support', title: 'Support' },
        { to: '/something', title: 'Something' },
        undefined,
        { to: '/more', title: 'More' },
      ]}
    >
      <PageSection>Hello world!</PageSection>
    </AppLayout>
  );
};
