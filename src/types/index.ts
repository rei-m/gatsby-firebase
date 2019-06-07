export interface User {
  readonly uid: string;
  readonly name: string;
}

export interface SiteMetaData {
  readonly title: string;
  readonly description: string;
  readonly author: string;
}

export interface Todo {
  readonly id: string;
  readonly text: string;
  readonly completed: boolean;
  readonly createdAt?: number;
  readonly updatedAt?: number;
}

export const SHOW_ACTIVE = 'SHOW_ACTIVE' as const;
export const SHOW_ALL = 'SHOW_ALL' as const;
export const SHOW_COMPLETED = 'SHOW_COMPLETED' as const;
export type VisibilityFilter =
  | typeof SHOW_ACTIVE
  | typeof SHOW_ALL
  | typeof SHOW_COMPLETED;
