export type GatsbyPlugin =
  | string
  | {
      resolve: string;
      options: any;
    };
