import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@src/components/Layout';
import SEO from '@src/components/Seo';
import TodoContents from '@src/components/TodoContents';
import GoogleAuthButton from '@src/components/GoogleAuthButton';
import AnonymousAuthButton from '@src/components/AnonymousAuthButton';
import SignOutButton from '@src/components/SignOutButton';
import { useFirebaseUser } from '@src/hooks/useFirebaseUser';
import { SiteMetaData } from '@src/types';

export interface Props {
  data: {
    site: {
      siteMetadata: Pick<SiteMetaData, 'title' | 'description'>;
    };
  };
}

const AuthButtonBox = styled.div`
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IndexPage = ({ data }: Props) => {
  const user = useFirebaseUser();
  return (
    <Layout user={user}>
      <SEO
        title={data.site.siteMetadata.title}
        keywords={[`gatsby`, `firebase`, `react`]}
        description={data.site.siteMetadata.description}
      />
      {user ? (
        <>
          <TodoContents user={user} />
          <AuthButtonBox>
            <SignOutButton />
          </AuthButtonBox>
        </>
      ) : user === null ? (
        <>
          <section>
            このサイトは
            <a
              href="https://twitter.com/rei_m"
              target="_blank"
              rel="noopener noreferrer"
            >
              @rei_m
            </a>
            がFirebaseの試し打ちのために立てたサイトです。
            <br />
            React.js（Gatsby.js）+ TypeScriptで作られています。
            <br />
            機能は認証 + よくあるTODOリストが実装されています。
            <br />
            デザインは適当ですがちゃんと動きます（ただエラーハンドリングやってないのでお察しください）。
            <br />
            常識の範囲内で自由に試してもらって構いません。認証済のGoogleの情報を完全に消したいときにはTwitterで連絡ください。
            <br />
            予告なくサイトを消すかもしれません。
          </section>
          <AuthButtonBox>
            <GoogleAuthButton />
            <br />
            <AnonymousAuthButton />
          </AuthButtonBox>
        </>
      ) : (
        <div></div>
      )}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
