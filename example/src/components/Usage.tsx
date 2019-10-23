import {
  PageSection,
  TextContent,
  Title,
  Text,
  FlexItem,
  Flex,
  Button,
} from '@patternfly/react-core';
import React from 'react';
import { Link } from 'react-router-dom';
import { CodeSample } from '.';

export const Usage: React.FunctionComponent = () => {
  return (
    <PageSection>
      <TextContent>
        <Title size={'3xl'}>Usage</Title>
        <Text>
          Import the component or hook that you need using the object
          destructuring syntax:
        </Text>

        <Text>
          Here is a simple application you can use to get you started.
          Another source of usage examples is{' '}
          <a
            href={
              'https://github.com/riccardo-forina/use-patternfly/tree/master/example'
            }
          >
            the code behind this website
          </a>
          .
        </Text>
      </TextContent>

      <CodeSample>
{`import React from 'react';
import ReactDOM from 'react-dom';

// PatternFly styling
import '@patternfly/react-core/dist/styles/base.css';

// peer dependencies
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

// use-patternfly
import { AppLayout, SwitchWith404 } from 'use-patternfly';

const App = () => {
  const history = useHistory();
  return (
    <AppLayout
      logo={'example app'}
      logoProps={{
        onClick: () => history.push('/')
      }}
      navItems={[
        {
          title: 'Dashboard',
          to: '/',
          exact: true
        }
      ]}
      navVariant={"vertical"}
    >
      <SwitchWith404>
        <Route path='/' exact={true}>
          Hello world!
        </Route>
      </SwitchWith404>
    </AppLayout>
  );
};


ReactDOM.render(
  <Router>
    <LastLocationProvider>
      <App />
    </LastLocationProvider>
  </Router>,
  document.getElementById('root')
);
`}
      </CodeSample>

      <Flex>
        <FlexItem
          breakpointMods={[{ modifier: 'align-right', breakpoint: 'sm' }]}
        >
          <Link to={'/api'}>
            <Button component={'div'}>Next: the API</Button>
          </Link>
        </FlexItem>
      </Flex>
    </PageSection>
  );
};
