'use client';

import type {
  BreedsContextValue,
  BreedsListingsContextProviderProps,
} from '@/models/context.models';
import { createContext, useState } from 'react';

const initialValue: BreedsContextValue = {
  breeds: [],
  setBreeds: () => void 0,
};

export const BreedsListingsContext = createContext(initialValue);

export const BreedsListingsProvider: React.FC<BreedsListingsContextProviderProps> = ({
  children,
  allBreeds = [],
}) => {
  const [breeds, setBreeds] = useState(allBreeds);

  const value: BreedsContextValue = {
    breeds,
    setBreeds,
  };

  return <BreedsListingsContext.Provider value={value}>{children}</BreedsListingsContext.Provider>;
};
