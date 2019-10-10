import * as React from 'react';
import { useA11yRouteContainer, useDocumentTitle } from 'use-patternfly';
import { Installation } from '../components';

export default function InstallationPage() {
  const a11yContainerProps = useA11yRouteContainer();
  useDocumentTitle('Installation');
  return (
    <Installation {...a11yContainerProps} />
  );
}
