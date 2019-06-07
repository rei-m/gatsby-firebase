import { GatsbyOnCreatePage } from './types';
import { Todo } from '@src/types';

export const onCreatePage: GatsbyOnCreatePage<{ todo: Todo }> = async ({
  page,
  actions,
}) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/todos/)) {
    page.matchPath = '/todos/:id';
    createPage(page);
  }
};
