import 'react-app-polyfill/ie11';
import '@patternfly/react-core/dist/styles/base.css';
import { Brand } from '@patternfly/react-core';
import * as React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { AppLayout, LazyRoute, SwitchWith404 } from 'use-patternfly';
import './app.css';
import logo from './use-patternfly.png';

export const App = () => {
  const history = useHistory();
  return (
    <AppLayout
      logo={<Brand src={logo} alt={'use-patternfly logo'} />}
      logoProps={{
        onClick: () => history.push('/')
      }}
      navVariant={'vertical'}
      navItems={[
        {
          title: 'Overview',
          to: '/',
          exact: true
        },
        {
          title: 'Getting Started',
          to: '/getting-started',
          items: [
            { to: '/getting-started/installation', title: 'Installation' },
            { to: '/getting-started/usage', title: 'Usage' },
          ]
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
        }, {
          title: 'Examples',
          to: '/examples',
          items: [
            { to: '/examples/async-data-list', title: 'Async Data List' },
          ],
        },
      ]}
      navGroupsStyle={'expandable'}
    >
      <LastLocationProvider>
        <SwitchWith404>
          <LazyRoute
            path='/'
            exact={true}
            getComponent={() => import('./pages/OverviewPage')}
          />
          <Redirect
            path={'/getting-started'}
            to={'/getting-started/installation'}
            exact={true}
          />
          <LazyRoute
            path='/getting-started/installation'
            getComponent={() => import('./pages/InstallationPage')}
          />
          <LazyRoute
            path='/getting-started/usage'
            getComponent={() => import('./pages/UsagePage')}
          />
          <Redirect
            path='/api'
            to={'/api/AppLayout'}
            exact={true}
          />
          <LazyRoute
            path='/examples/async-data-list/:page?'
            getComponent={() => import('./pages/AsyncDataList')}
          />
        </SwitchWith404>
    </AppLayout>
  );
};