import React from 'react';

export interface IExampleLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  filename: string;
}

export const ExampleLink: React.FunctionComponent<IExampleLinkProps> = ({
  filename,
  children,
  ...props
}) => (
  <a
    href={`https://github.com/riccardo-forina/use-patternfly/tree/master/example/pages/${filename}`}
    {...props}
  >
    {children}
  </a>
);
