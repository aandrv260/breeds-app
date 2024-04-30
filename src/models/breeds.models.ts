export type BreedsList = Record<string, string[]>;

export type ApiResponse<T> =
  | {
      status: 'success';
      message: T;
    }
  | {
      status: 'error';
      message: string;
    };

export type BreedsListAPIResponse = ApiResponse<BreedsList>;
export type BreedGalleryAPIResponse = ApiResponse<string[]>;

export type Breed = {
  id: string;
  name: string;
  imageSrc: string | null;
  displayed: boolean;
};
