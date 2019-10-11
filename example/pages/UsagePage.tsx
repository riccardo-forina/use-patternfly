import * as React from 'react';
import { useA11yRouteChange, useDocumentTitle } from 'use-patternfly';
import { Usage } from '../components';

export default function UsagePage() {
  useA11yRouteChange();
  useDocumentTitle('Usage');
  return <Usage />;
}
