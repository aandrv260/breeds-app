import API_URLS, { DEFAULT_REVALIDATE } from '@/constants/api';
import { BreedsListAPIResponse } from '@/models/breeds.models';
import 'server-only';

export const getAllBreedsInfo = async () => {
  const resp = await fetch(API_URLS.allBreeds, {
    next: {
      revalidate: DEFAULT_REVALIDATE,
    },
  });

  const data = (await resp.json()) as BreedsListAPIResponse;
  return data.message;
};
