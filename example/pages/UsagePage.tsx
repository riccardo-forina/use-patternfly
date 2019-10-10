import * as React from 'react';
import { useA11yRouteContainer, useDocumentTitle } from 'use-patternfly';
import { Usage } from '../components';

export default function UsagePage() {
  const a11yContainerProps = useA11yRouteContainer();
  useDocumentTitle('Usage');
  return (
    <Usage {...a11yContainerProps} />
  );
}
