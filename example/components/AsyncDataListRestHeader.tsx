import * as React from 'react';
import { PageSection, Text, TextContent, Title } from '@patternfly/react-core';
import { ExampleLink } from './ExampleLink';

export const AsyncDataListRestHeader: React.FunctionComponent = () => (
  <PageSection variant={'light'}>
    <TextContent>
      <Title size={'3xl'} headingLevel={'h1'}>
        Async Data List (REST)
      </Title>
      <Text>
        A common pattern is to call a REST API, wait for its results and show
        the data in a data list. In this example we use {' '}
        <a href={'https://swapi.co'}>SWApi</a> as a sample backend service
        to show the list of characters in the Star Wars universe.
      </Text>
      <Text>
        <ExampleLink filename={'AsyncDataListRestPage.tsx'}>
          Source for this example
        </ExampleLink>
        .
      </Text>
    </TextContent>
  </PageSection>
);
