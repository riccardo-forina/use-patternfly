import * as React from 'react';
import { useA11yRouteContainer, useDocumentTitle } from 'use-patternfly';
import { Overview } from '../components';

export default function OverviewPage() {
  const a11yContainerProps = useA11yRouteContainer();
  useDocumentTitle('Overview');
  return (
    <Overview {...a11yContainerProps} />
  );
}
