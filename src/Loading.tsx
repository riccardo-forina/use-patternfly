import * as React from 'react';
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateVariant,
  PageSection,
  Title,
  Spinner,
} from '@patternfly/react-core';

export const Loading: React.FunctionComponent = () => (
  <PageSection aria-label="Loading Content Container">
    <EmptyState variant={EmptyStateVariant.full}>
      <EmptyStateIcon variant="container" component={Spinner} />
      <Title size="lg" headingLevel={'h1'}>
        Loading
      </Title>
    </EmptyState>
  </PageSection>
);
