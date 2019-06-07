import * as React from 'react';
import { graphql } from 'gatsby';
import { Match, MatchRenderProps } from '@reach/router';
import { SiteMetaData } from '@src/types';
import Layout from '@src/components/Layout';
import SEO from '@src/components/Seo';
import Loading from '@src/components/Loading';
import TodoDetail from '@src/components/TodoDetail';
import { useFirebaseUser } from '@src/hooks/useFirebaseUser';

export interface OwnProps {
  data: {
    site: {
      siteMetadata: Pick<SiteMetaData, 'title' | 'description'>;
    };
  };
}

export interface MatchParams {
  todoId: string;
}

export type Props = OwnProps & MatchParams;

export const TodosPage = ({ data, todoId }: Props) => {
  const user = useFirebaseUser();
  return (
    <Layout user={user}>
      <SEO
        title={`${data.site.siteMetadata.title}`}
        keywords={[`gatsby`, `firebase`, `react`]}
        description={data.site.siteMetadata.description}
      />
      {user ? (
        <TodoDetail uid={user.uid} todoId={todoId} />
      ) : user === null ? (
        <div>この画面は認証済のユーザー専用です</div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

const MatchTodosPage = (props: OwnProps) => (
  <Match path="/todos/:todoId">
    {({ match }: MatchRenderProps<MatchParams>) =>
      match && <TodosPage todoId={match.todoId} {...props} />
    }
  </Match>
);

export default MatchTodosPage;

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
