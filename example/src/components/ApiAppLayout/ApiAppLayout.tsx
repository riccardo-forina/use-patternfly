import {
  PageSection,
  TextContent,
  Title,
  Text, TextList, TextListItem,
} from '@patternfly/react-core';
import React from 'react';
import { CodePreview } from '../CodePreview';

export const ApiAppLayout: React.FunctionComponent = () => {
  return (
    <PageSection>
      <TextContent>
        <Title size={'3xl'}>AppLayout</Title>

        <Title size={'xl'} headingLevel={'h2'}>
          The AppLayout is a shortcut component to create a PatternFly chrome
          around your application.
        </Title>
        <Text>
          It supports both horizontal and vertical navigations, dark and light
          theme and lets you control how to deal with the toolbar area of the app.
        </Text>

        <Title size={'lg'} headingLevel={'h3'}>Features</Title>
        <TextList>
          <TextListItem>
            When using a vertical navigation, the sidebar is automatically toggled
            if the viewport switches between a desktop and mobile area.
          </TextListItem>
          <TextListItem>
            The toggle sidebar button works out of the box and it's visible only
            there are navigation items.
          </TextListItem>
          <TextListItem>
            Nested navigations are supported both in the grouped and expandable
          variants.
          </TextListItem>
        </TextList>
      </TextContent>

      <CodePreview
        title={'Basic usage'}
        code={require('!!raw-loader!./demo/base.tsx').default /*eslint-disable-line*/}
        component={require('./demo/base.tsx').default}
      />

      <CodePreview
        title={'Vertical navigation'}
        code={require('!!raw-loader!./demo/vertical-flat.tsx').default /*eslint-disable-line*/}
        component={require('./demo/vertical-flat.tsx').default}
      />

      <CodePreview
        title={'Vertical navigation, grouped items'}
        code={require('!!raw-loader!./demo/vertical-grouped.tsx').default /*eslint-disable-line*/}
        component={require('./demo/vertical-grouped.tsx').default}
      />

      <CodePreview
        title={'Vertical navigation, expandable items'}
        code={require('!!raw-loader!./demo/vertical-expandable').default /*eslint-disable-line*/}
        component={require('./demo/vertical-expandable').default}
      />

    </PageSection>
  );
};
