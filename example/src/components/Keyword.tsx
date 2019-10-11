import React from 'react';
import { css, StyleSheet } from '@patternfly/react-styles';

const styles = StyleSheet.create({
  keyword: {
    display: 'inline-block',
    backgroundColor: `var(--pf-global--BackgroundColor--light-200)`,
    fontFamily: 'monospace',
    padding: '3px',
    borderRadius: '3px',
  },
});

export const Keyword: React.FunctionComponent = props => (
  <span {...props} className={css(styles.keyword)} />
);
