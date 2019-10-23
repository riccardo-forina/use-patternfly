import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-async-light';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
SyntaxHighlighter.registerLanguage('tsx', tsx);

vs['pre[class*="language-"]'].border = '0 none transparent';

export const CodeSample:React.FunctionComponent = ({ children }) => (
  <SyntaxHighlighter language="tsx" style={vs}>
    {children}
  </SyntaxHighlighter>
);
