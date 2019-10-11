import * as React from 'react';
import {
  PageSection,
  TextContent,
  Title,
  Text,
  FlexItem,
  Flex,
  Button,
} from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import logo from '../use-patternfly.png';
import { Keyword } from './Keyword';

export const Overview: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <PageSection variant={'dark'} style={{ textAlign: 'center' }}>
        <div>
          <img src={logo} alt={'use-patternfly logo'} />
        </div>
        <a href={'https://circleci.com/gh/riccardo-forina/use-patternfly'}>
          <img
            alt={'Build status'}
            src={
              'https://img.shields.io/circleci/build/github/riccardo-forina/use-patternfly'
            }
          />
        </a>
        &nbsp;
        <a href="https://coveralls.io/github/riccardo-forina/use-patternfly?branch=master">
          <img
            alt={'Coverage Status'}
            src={
              'https://coveralls.io/repos/github/riccardo-forina/use-patternfly/badge.svg?branch=master'
            }
          />
        </a>
      </PageSection>
      <PageSection>
        <TextContent>
          <Title size={'3xl'}>Overview</Title>
          <Text>
            <Keyword>use-patternfly</Keyword> is an opinionated set of hooks and
            components useful when building a React app with{' '}
            <a href={'https://patternfly.org'}>PatternFly</a>.
          </Text>
          <Text>
            This project aims to encourage code reuse between all projects using
            PatternFly and to showcase how to implement features like fetching
            from an API and showing the data in a DataList or Table component.
          </Text>

          <Title size={'xl'} headingLevel={'h2'}>
            Motivation
          </Title>
          <Text>
            Since I (
            <a href={'https://twitter.com/riccardoforina'}>@riccardoforina</a>)
            started building apps using PatternFly, I found myself writing
            solutions to the same problem many times. But how many ways can
            there be to{' '}
            <Link to={'/api/useDocumentTitle'}>set the document title</Link> or{' '}
            <Link to={'/api/AppLayout'}>
              wrap an app in a PatternFly chrome
            </Link>
            ? I felt the need to finalize these solutions in something reusable
            and well-tested, to finally be able to focus on the app needs
            instead of re-learning how to wire PatternFly's components once
            again.
          </Text>

          <Title size={'xl'} headingLevel={'h2'}>
            Dependencies
          </Title>
          <Text>
            The only real dependency-other than PatternFly itself-is{' '}
            <a href={'https://github.com/ReactTraining/react-router'}>
              react-router
            </a>
            , although it's listed as a peer dependency to avoid clashing with
            whatever version you are running on your project. Other utilities
            might have extra dependencies, but if you don't plan on using that
            specific utility you don't need to install them.
          </Text>
        </TextContent>

        <Flex>
          <FlexItem
            breakpointMods={[{ modifier: 'align-right', breakpoint: 'sm' }]}
          >
            <Link to={'/getting-started/installation'}>
              <Button as={'div'}>Installation</Button>
            </Link>
          </FlexItem>
        </Flex>
      </PageSection>
    </>
  );
};
