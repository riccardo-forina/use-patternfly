import { Button } from '@patternfly/react-core';
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { LazyRoute } from './LazyRoute';

const stories = storiesOf('Utils', module);

stories.add('LazyRoute', () => {
  const ItWorks = () => <div>It works</div>;
  let getComponentResolve: any;
  const getComponentPromise = new Promise<{ default: React.ComponentType }>(
    resolve => {
      getComponentResolve = resolve;
    }
  );
  const getComponent = () => getComponentPromise;
  const resolveComponent = () => getComponentResolve({ default: ItWorks });
  return (
    <MemoryRouter>
      <LazyRoute getComponent={getComponent}>
        {({ component: Component }) => <Component />}
      </LazyRoute>
      <Button onClick={resolveComponent}>Resolve the promise</Button>
    </MemoryRouter>
  );
});
