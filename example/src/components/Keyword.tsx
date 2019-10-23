import React from 'react';
import { css, StyleSheet } from '@patternfly/react-styles';

const styles = StyleSheet.create({
  keyword: {
    display: 'inline-block',
    color: `var(--pf-global--Color--light-100)`,
    backgroundColor: `var(--pf-global--BackgroundColor--dark-400)`,
    fontFamily: 'monospace',
    fontSize: '1.2rem',
    padding: '0.2em 0.5em',
    borderRadius: '3px',
  },
});

export const Keyword: React.FunctionComponent = props => (
  <span {...props} className={css(styles.keyword)} />
);
