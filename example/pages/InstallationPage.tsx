import * as React from 'react';
import { useA11yRouteChange, useDocumentTitle } from 'use-patternfly';
import { Installation } from '../components';

export default function InstallationPage() {
  useA11yRouteChange();
  useDocumentTitle('Installation');
  return <Installation />;
}
