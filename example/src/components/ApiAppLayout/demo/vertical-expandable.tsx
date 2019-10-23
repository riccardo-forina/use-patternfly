import React from 'react';
import { PageSection } from '@patternfly/react-core';
import { AppLayout } from 'use-patternfly';

export default () => {
  return (
    <AppLayout
      logo={'My app'}
      navVariant={'vertical'}
      navGroupsStyle={'expandable'}
      navItems={[
        {
          title: 'Samples',
          to: '/samples/',
          items: [
            { to: '/samples/foo', title: 'Foo' },
            undefined,
            { to: '/samples/bar', title: 'Bar' },
            { to: '/samples/baz', title: 'Baz' },
          ],
        },
        {
          title: 'Support',
          to: '/support',
          items: [
            { to: '/support/foo', title: 'Foo' },
            undefined,
            { to: '/support/bar', title: 'Bar' },
          ],
        },
        { to: '/something', title: 'Something' },
        undefined,
        { to: '/more', title: 'More' },
      ]}
    >
      <PageSection>Hello world!</PageSection>
    </AppLayout>
  );
};
