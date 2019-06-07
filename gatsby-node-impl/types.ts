import { ExecutionResult } from 'graphql';

interface PageInput<T> {
  path: string;
  component: string;
  layout?: string;
  context?: T;
  matchPath?: string;
}

// https://www.gatsbyjs.org/docs/actions/#createNode
interface NodeInputBase {
  id: string;
  parent?: string;
  children: string[];
  internal: {
    mediaType?: string;
    type: string;
    content?: string;
    contentDigest?: string;
    description?: string;
  };
}

interface GatsbyActionCreators<T> {
  createPage: (page: PageInput<T>) => void;
  deletePage: (page: PageInput<T>) => void;
  createNode: (node: NodeInputBase & T) => void;
  createRedirect: (opts: {
    fromPath: string;
    isPermanent?: boolean;
    redirectInBrowser?: boolean;
    toPath: string;
  }) => void;
}

// この定義手抜き
export type GatsbyCreatePages<T> = (fns: {
  graphql: (query: any, context?: any) => Promise<ExecutionResult<any>>;
  actions: GatsbyActionCreators<T>;
}) => void;

export type GatsbySourceNodes<T> = (fns: {
  actions: GatsbyActionCreators<T>;
  createNodeId: (id: string) => string;
  createContentDigest: (data: T) => string;
}) => void;

export type GatsbyOnCreatePage<T> = (fns: {
  page: PageInput<T>;
  actions: GatsbyActionCreators<T>;
}) => void;
