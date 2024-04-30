export type PageProps<T, U extends object = {}> = {
  params: T;
  searchParams: U;
};

export type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export type ImageModel = {
  src: string;
  alt?: string;
};
