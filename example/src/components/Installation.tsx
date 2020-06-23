import {
  PageSection,
  TextContent,
  Title,
  Text,
  FlexItem,
  Flex,
  Button,
  TextList,
  TextListItem,
} from '@patternfly/react-core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Keyword } from './Keyword';

export const Installation: React.FunctionComponent = ({ children }) => {
  return (
    <PageSection>
      <TextContent>
        <Title size="xl" headingLevel={"h1"}>Installation</Title>
        <Text>
          You can install <Keyword>use-patternfly</Keyword> from npm:
        </Text>
        <Text component={'blockquote'}>npm install use-patternfly --save</Text>
        <Text>Or if you're using Yarn:</Text>
        <Text component={'blockquote'}>yarn add use-patternfly</Text>
        <Text>
          This package requires the following packages as peer dependencies:
        </Text>
        <TextList>
          <TextListItem>
            <Keyword>@patternfly/react-core</Keyword>
          </TextListItem>
          <TextListItem>
            <Keyword>@patternfly/react-styles</Keyword>
          </TextListItem>
          <TextListItem>
            <Keyword>@patternfly/react-icons</Keyword>
          </TextListItem>
          <TextListItem>
            <Keyword>react-router</Keyword>
          </TextListItem>
          <TextListItem>
            <Keyword>react-router-dom</Keyword>
          </TextListItem>
        </TextList>
        <Text>
          Please make sure to install them as well. You'll need{' '}
          <Keyword>react@16.8.0</Keyword>
          or later since the package uses hooks.
        </Text>
        <Text>
          Some of the provided components and hooks could require additional
          dependencies.
        </Text>
      </TextContent>
      <Flex>
        <FlexItem
          align={{sm: "alignRight"}}
        >
          <Link to={'/getting-started/usage'}>
            <Button component={'div'}>Usage</Button>
          </Link>
        </FlexItem>
      </Flex>
    </PageSection>
  );
};
