import * as React from 'react';
import FilterLink from '@src/components/FilterLink';
import {
  VisibilityFilter,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '@src/types';

export interface Props {
  currentFilter: VisibilityFilter;
  onClick: (filter: VisibilityFilter) => void;
}

const Footer = ({ currentFilter, onClick }: Props) => (
  <footer>
    Show:{' '}
    <FilterLink
      filter={SHOW_ALL}
      active={currentFilter === SHOW_ALL}
      onClick={onClick}
    >
      All
    </FilterLink>
    {', '}
    <FilterLink
      filter={SHOW_ACTIVE}
      active={currentFilter === SHOW_ACTIVE}
      onClick={onClick}
    >
      Active
    </FilterLink>
    {', '}
    <FilterLink
      filter={SHOW_COMPLETED}
      active={currentFilter === SHOW_COMPLETED}
      onClick={onClick}
    >
      Completed
    </FilterLink>
  </footer>
);

export default Footer;
