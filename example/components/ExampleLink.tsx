import * as React from 'react';

export interface IExampleLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  filename: string;
}

export const ExampleLink: React.FunctionComponent<IExampleLinkProps> = ({ filename, ...props }) =>
  <a href={`https://github.com/riccardo-forina/use-patternfly/tree/master/example/pages/${filename}`} {...props} />