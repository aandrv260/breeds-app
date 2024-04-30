import ROUTES from '@/constants/routes';
import { ApiResponse, Breed, BreedsList } from '@/models/breeds.models';
import { capitalize } from './string.utils';
import API_URLS, { DEFAULT_REVALIDATE } from '@/constants/api';

export const generateBreedGalleryPageURL = (breedName: string) =>
  `${ROUTES.breedGallery(breedName)}`;

export const getAllBreedsEntries = (breedList: BreedsList) => {
  const allBreedsEntries = Object.entries(breedList);
  const allMainBreedsEntries = allBreedsEntries.filter(([_, value]) => value.length === 0);
  const allSubBreedsEntries = allBreedsEntries.filter(([_, values]) => values.length > 0);

  return { allMainBreedsEntries, allSubBreedsEntries };
};

/**
 * Takes the API response that includes all the breeds and sub-breeds and transforms them into a simple string[] to make them easier to work with.
 *
 * Sorts the results alphabetically
 * @param breedList The API response with all the breeds
 * @returns
 */
export const getNamesFromBreedList = (breedList: BreedsList) => {
  const { allMainBreedsEntries, allSubBreedsEntries } = getAllBreedsEntries(breedList);
  const allMainBreeds = allMainBreedsEntries.map(([key]) => key);

  const allSubBreeds = allSubBreedsEntries.flatMap(([key, values]) =>
    values.map(curValue => `${key}/${curValue}`)
  );

  const allBreeds = [...allMainBreeds, ...allSubBreeds];
  return allBreeds.sort();
};

/**
 * Makes the breed name more human readable. If a sub-breed is present in the name, it removes the `/` and replaces it with empty space
 */
export const formatBreedNameFromId = (breedId: string) => capitalize(breedId.replace('/', ' '));

/**
 * Generates breeds data that will be used in the `BreedsListingsContext`
 */
export const generateInitialBreedsDataFromNames = (breedIds: string[]): Breed[] => {
  return breedIds.map(curBreedId => ({
    id: curBreedId,
    name: formatBreedNameFromId(curBreedId),
    imageSrc: null,
    displayed: true,
  }));
};

export const generateAllBreedsContextData = (breedList: BreedsList) => {
  const breedNames = getNamesFromBreedList(breedList);
  const allBreeds = generateInitialBreedsDataFromNames(breedNames);
  return allBreeds;
};

export const getBreedListingImage = async (breedId: string) => {
  const resp = await fetch(API_URLS.getImageFromBreed(breedId), {
    next: { revalidate: DEFAULT_REVALIDATE },
  });
  const data = (await resp.json()) as ApiResponse<string>;
  return data.message;
};
