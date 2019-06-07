import { SiteMetaData } from '../src/types';
import { GatsbyPlugin } from './types';

export const siteMetadata: SiteMetaData = {
  title: `Gatsby Todo Sample`,
  description: `Todo Application created by Gatsby with TypeScript.`,
  author: `@rei-m`,
};

export const plugins: GatsbyPlugin[] = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/../src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-todo-sample`,
      short_name: `todo`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.app/offline
  // 'gatsby-plugin-offline',
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/styles/typography.ts`,
    },
  },
  `gatsby-plugin-typescript`,
  `gatsby-plugin-remove-trailing-slashes`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-no-sourcemaps`,
];
