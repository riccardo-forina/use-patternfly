import * as React from 'react';
import { useRouteMatch, Route } from 'react-router';
import { SwitchWith404, useA11yRouteContainer, useDocumentTitle } from 'use-patternfly';
import { DashboardLayout } from '../components';
import DashboardSimplePage from './DashboardSimplePage';
import DashboardParamsPage from './DashboardParamsPage';

export default function DashboardPage() {
  const { path } = useRouteMatch()!;
  const a11yContainerProps = useA11yRouteContainer();
  useDocumentTitle('Dashboard');
  return (
    <DashboardLayout {...a11yContainerProps}>
      <SwitchWith404>
        <Route
          path={`${path}/simple`}
        >
          <DashboardSimplePage />
        </Route>
        <Route
          path={`${path}/params/:sample?`}
        >
          <DashboardParamsPage />
        </Route>
      </SwitchWith404>
    </DashboardLayout>
  );
}
