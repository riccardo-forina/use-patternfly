import React from 'react';
import { PageSection } from '@patternfly/react-core';
import { AppLayout } from 'use-patternfly';

export default () => {
  return (
    <AppLayout
      logo={'My app'}
      navItems={[
        { to: '/samples/', title: 'Samples' },
        { to: '/support', title: 'Support' },
        { to: '/something', title: 'Something' },
      ]}
    >
      <PageSection>Hello world!</PageSection>
    </AppLayout>
  );
};
