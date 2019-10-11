import 'react-app-polyfill/ie11';
import '@patternfly/react-core/dist/styles/base.css';
import { Brand } from '@patternfly/react-core';
import * as React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { AppLayout, LazyRoute, SwitchWith404 } from 'use-patternfly';
import './app.css';
import logo from './use-patternfly.png';

const Logo = <Brand src={logo} alt={'use-patternfly logo'} />;
const navItems = [
  {
    title: 'Overview',
    to: '/',
    exact: true,
  },
  {
    title: 'Getting Started',
    to: '/getting-started',
    items: [
      { to: '/getting-started/installation', title: 'Installation' },
      { to: '/getting-started/usage', title: 'Usage' },
    ],
  },
  {
    title: 'API',
    to: '/api',
    items: [
      { to: '/api/AppLayout', title: 'AppLayout' },
      { to: '/api/AppNavExpandable', title: 'AppNavExpandable' },
      { to: '/api/AppNavGroup', title: 'AppNavGroup' },
      { to: '/api/AppNavItem', title: 'AppNavItem' },
      { to: '/api/LazyRoute', title: 'LazyRoute' },
      { to: '/api/Loading', title: 'Loading' },
      { to: '/api/NotFound', title: 'NotFound' },
      { to: '/api/SwitchWith404', title: 'SwitchWith404' },
      { to: '/api/useA11yRoute', title: 'useA11yRoute' },
      { to: '/api/useBreadcrumb', title: 'useBreadcrumb' },
      { to: '/api/useDocumentTitle', title: 'useDocumentTitle' },
    ],
  },
  {
    title: 'Examples',
    to: '/examples',
    items: [
      { to: '/examples/async-data-list-rest', title: 'Async Data List (REST)' },
      { to: '/examples/async-data-list-graphql', title: 'Async Data List (Graphql)' },
    ],
  },
];

const getOverviewPage = () => import('./pages/OverviewPage');
const getInstallationPage = () => import('./pages/InstallationPage');
const getUsagePage = () => import('./pages/UsagePage');
const getAsyncDataListRest = () => import('./pages/AsyncDataListRestPage');
const getAsyncDataListGraphQL = () => import('./pages/AsyncDataListGraphQLPage');

export const App = () => {
  const history = useHistory();
  const logoProps = React.useMemo(
    () => ({
      onClick: () => history.push('/'),
    }),
    [history]
  );
  return (
    <AppLayout
      logo={Logo}
      logoProps={logoProps}
      navVariant={'vertical'}
      navItems={navItems}
      navGroupsStyle={'expandable'}
    >
      <SwitchWith404>
        <LazyRoute path="/" exact={true} getComponent={getOverviewPage} />
        <Redirect
          path={'/getting-started'}
          to={'/getting-started/installation'}
          exact={true}
        />
        <LazyRoute
          path="/getting-started/installation"
          getComponent={getInstallationPage}
        />
        <LazyRoute path="/getting-started/usage" getComponent={getUsagePage} />
        <Redirect path="/api" to={'/api/AppLayout'} exact={true} />
        <LazyRoute
          path="/examples/async-data-list-rest/:page?"
          getComponent={getAsyncDataListRest}
        />
        <LazyRoute
          path="/examples/async-data-list-graphql/:page?"
          getComponent={getAsyncDataListGraphQL}
        />
      </SwitchWith404>
    </AppLayout>
  );
};
