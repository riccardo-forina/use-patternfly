import React from 'react';
import { useA11yRouteChange, useDocumentTitle } from 'use-patternfly';
import { ApiAppLayout } from '../components';

export default function ApiAppLayoutPage() {
  useA11yRouteChange();
  useDocumentTitle('AppLayout');
  return <ApiAppLayout />;
}
