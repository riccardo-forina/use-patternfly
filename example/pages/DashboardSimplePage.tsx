import * as React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import { useA11yRouteContainer, useBreadcrumb, useDocumentTitle } from '../../.';
import { DashboardSimple } from '../components';

const DashboardPageBreadcrumbs = (
  <Breadcrumb>
    <BreadcrumbItem><Link to='/dashboard'>Dashboard</Link></BreadcrumbItem>
    <BreadcrumbItem isActive={true}>
      Simple
    </BreadcrumbItem>
  </Breadcrumb>
);

export default function DashboardPage() {
  const a11yContainerProps = useA11yRouteContainer();
  useDocumentTitle('Dashboard - Simple');
  useBreadcrumb(
    DashboardPageBreadcrumbs
  );
  return (
    <DashboardSimple {...a11yContainerProps} />
  );
}
