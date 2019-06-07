import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { User, SiteMetaData } from '@src/types';
import Header from '@src/components/Header';

export interface Props {
  user?: User | null;
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const UserBlock = styled.div`
  padding: 32px;
`;

export interface SiteTitleQueryData {
  site: {
    siteMetadata: Pick<SiteMetaData, 'title'>;
  };
}

const Layout: React.FC<Props> = ({ children, user }) => {
  return (
    <>
      <Header
        siteTitle={
          useStaticQuery<SiteTitleQueryData>(query).site.siteMetadata.title
        }
      />
      <Main>
        {user && <UserBlock>{`${user.name}さんのTODOリスト`}</UserBlock>}
        {children}
      </Main>
    </>
  );
};

export default Layout;

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
