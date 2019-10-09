import * as React from 'react';
import { useA11yRouteContainer, useDocumentTitle } from 'use-patternfly';
import { Support } from '../components';

export default function SupportPage() {
  const a11yContainerProps = useA11yRouteContainer();
  useDocumentTitle('Support');
  return (
    <Support {...a11yContainerProps} />
  );
}
