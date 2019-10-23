import React from 'react';
import { PageSection } from '@patternfly/react-core';
import { AppLayout } from 'use-patternfly';

export default () => {
  return (
    <AppLayout
      logo={'My app'}
      logoProps={{
        onClick: () => alert('You clicked the logo')
      }}
    >
      <PageSection>Hello world!</PageSection>
    </AppLayout>
  );
};