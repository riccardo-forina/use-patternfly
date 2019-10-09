import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Alert, PageSection } from '@patternfly/react-core';
import { useA11yRouteContainer, useDocumentTitle } from 'use-patternfly';

const NotFound: React.FunctionComponent = () => {
  const a11yContainerProps = useA11yRouteContainer();
  useDocumentTitle('Page not found');
  return (
    <PageSection {...a11yContainerProps}>
      <Alert variant="danger" title="404! This view hasn't been created yet." /><br />
      <NavLink to="/" className="pf-c-nav__link">Take me home</NavLink>
    </PageSection>
  );
}

export default NotFound;
