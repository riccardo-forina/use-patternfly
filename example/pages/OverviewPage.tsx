import * as React from 'react';
import { useA11yRouteChange, useDocumentTitle } from 'use-patternfly';
import { Overview } from '../components';

export default function OverviewPage() {
  useA11yRouteChange();
  useDocumentTitle('Overview');
  return <Overview />;
}
