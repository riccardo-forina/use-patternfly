import * as React from 'react';
import { useParams } from 'react-router';
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import { useA11yRouteContainer, useBreadcrumb, useDocumentTitle } from '../../.';
import { DashboardParams } from '../components';

export const DashboardPageBreadcrumbs = (
  <Breadcrumb>
    <BreadcrumbItem><Link to='/dashboard'>Dashboard</Link></BreadcrumbItem>
    <BreadcrumbItem isActive={true}>
      Params
    </BreadcrumbItem>
  </Breadcrumb>
);

export default function DashboardPage() {
  const a11yContainerProps = useA11yRouteContainer();
  const { sample } = useParams<{ sample?: string }>();
  useDocumentTitle('Dashboard - Params');
  useBreadcrumb(
    DashboardPageBreadcrumbs
  );
  return (
    <DashboardParams sample={sample || 'empty'} {...a11yContainerProps} />
  );
}
