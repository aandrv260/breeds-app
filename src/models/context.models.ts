import { PropsWithChildren } from 'react';
import { Breed } from './breeds.models';

export type BreedsContextValue = {
  breeds: Breed[];
  setBreeds: React.Dispatch<React.SetStateAction<Breed[]>>;
};

export type BreedsListingsContextProviderProps = PropsWithChildren & {
  allBreeds?: Breed[];
};

export type FavoriteImagesContextValue = {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
};
