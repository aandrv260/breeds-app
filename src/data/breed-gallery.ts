import { redirect } from 'next/navigation';
import API_URLS, { DEFAULT_REVALIDATE } from '@/constants/api';
import ROUTES from '@/constants/routes';
import { BreedGalleryAPIResponse } from '@/models/breeds.models';
import 'server-only';

export const fetchBreedGalleryImages = async (breed: string, subBreed: string | undefined) => {
  const resp = await fetch(API_URLS.breed(breed, subBreed), {
    next: {
      revalidate: DEFAULT_REVALIDATE,
    },
  });
  const data = (await resp.json()) as BreedGalleryAPIResponse;
  return data;
};

export const redirectToClosestBreedGalleryPage = (breed: string, subBreed: string) => {
  redirect(ROUTES.breedGallery(`${breed}/${subBreed}`));
};
