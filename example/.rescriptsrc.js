const path = require('path');
const resolveFrom = require('resolve-from');

module.exports = [
  config => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'use-patternfly': path.resolve(__dirname, '../dist'),
        react$: resolveFrom(path.resolve('node_modules'), 'react'),
        'react-dom$': resolveFrom(path.resolve('node_modules'), 'react-dom'),
        'react-router$': resolveFrom(path.resolve('node_modules'), 'react-router'),
        'react-router-dom$': resolveFrom(path.resolve('node_modules'), 'react-router-dom')
      },
      plugins: config.resolve.plugins.filter(plugin => plugin.toString().includes('ModuleScopePlugin'))

    };
    return config;
  }
];
