import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import { CodeIcon } from '@patternfly/react-icons';
import { css, StyleSheet } from '@patternfly/react-styles';
import React from 'react';
import { CodeSample } from './CodeSample';

const demo = StyleSheet.create({
  card: {
    margin: '1rem 0'
  }
});

export interface IDemoProps {
  title: string;
  code: string;
  component: React.ComponentType<{}>
}

export const CodePreview: React.FunctionComponent<IDemoProps> = ({ title, code, component: Component }) => {
  const [showCode, setShowCode] = React.useState(false);
  return (
    <Card className={css(demo.card)}>
      <CardHeader>
        {title}
      </CardHeader>
      <CardBody>
        <Component />
      </CardBody>
      <CardFooter>
        <ToolbarGroup>
          <ToolbarItem>
            <Button
              onClick={() => setShowCode(!showCode)}
              variant={'link'}
            >
              <CodeIcon /> JSX
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        {showCode && <CodeSample>{code}</CodeSample>}
      </CardFooter>
    </Card>
  )
};
