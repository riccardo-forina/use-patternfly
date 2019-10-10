import {
  PageSection,
  TextContent,
  Title,
  Text,
  FlexItem,
  Flex,
  Button,
} from '@patternfly/react-core';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const Usage: React.FunctionComponent<any> = ({ children, ...props }) => {
  return (
    <PageSection {...props}>
      <TextContent>
        <Title size={'3xl'}>Usage</Title>
        <Text>Import the component or hook that you need using the object destructuring syntax:</Text>
      </TextContent>

      <iframe style={{height: 565, width: "100%", margin: '20px 0'}} scrolling={'no'} title="use-patternfly-usage-example"
              src="https://codepen.io/riccardo-forina/embed/oNNjjqv?height=265&theme-id=0&default-tab=js"
              frameBorder="no" allowFullScreen={true}>
        See the Pen <a href='https://codepen.io/riccardo-forina/pen/oNNjjqv'>use-patternfly-usage-example</a> by
        Riccardo Forina
        (<a href='https://codepen.io/riccardo-forina'>@riccardo-forina</a>) on <a
        href='https://codepen.io'>CodePen</a>.
      </iframe>

      <TextContent>
        <Text>Another source of usage examples is <a href={'https://github.com/riccardo-forina/use-patternfly/tree/master/example'}>the code behind this website</a>.</Text>
      </TextContent>

      <Flex>
        <FlexItem breakpointMods={[{modifier: 'align-right', breakpoint: 'sm'}]}>
          <Link to={'/api'}><Button component={'div'}>API</Button></Link>
        </FlexItem>
      </Flex>
    </PageSection>
  );
}
