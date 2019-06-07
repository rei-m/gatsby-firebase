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

const { resolve } = require('path');

const config = require('./gatsby-node-impl');

exports.createPages = config.createPages;

exports.onCreatePage = config.onCreatePage;

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@src': resolve(__dirname, 'src/'),
      },
    },
  });
};
