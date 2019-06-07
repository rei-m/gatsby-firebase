'use strict';

require('source-map-support').install();

require('tsconfig-paths').register({
  baseUrl: './',
  paths: {
    '@src/*': ['src/*'],
  },
});

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
    noImplicitAny: false,
    types: ['node'],
  },
});

const config = require('./gatsby-config-impl');

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins: config.plugins,
};
