'use client';

import { PropsWithChildren, createContext, useState } from 'react';
import type { FavoriteImagesContextValue } from '@/models/context.models';

const initialValue: FavoriteImagesContextValue = {
  images: [],
  setImages: () => void 0,
};

export const FavoriteImagesContext = createContext(initialValue);

export const FavoriteImagesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [images, setImages] = useState<string[]>([]);

  const value: FavoriteImagesContextValue = {
    images,
    setImages,
  };

  return <FavoriteImagesContext.Provider value={value}>{children}</FavoriteImagesContext.Provider>;
};
