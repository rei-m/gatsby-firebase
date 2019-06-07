import * as React from 'react';
import { VisibilityFilter } from '@src/types';

export interface Props {
  filter: VisibilityFilter;
  active: boolean;
  onClick: (filter: VisibilityFilter) => void;
}

export const FilterLink: React.FC<Props> = ({
  children,
  filter,
  active,
  onClick,
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  const handleOnClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick(filter);
  };

  return (
    <a href="#" onClick={handleOnClick}>
      {children}
    </a>
  );
};

export default FilterLink;
