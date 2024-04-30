const API_ROOT_URL = 'https://dog.ceo/api';

const getBreedAPIUrl = (breed: string, subBreed?: string) => {
  if (subBreed) {
    return `${API_ROOT_URL}/breed/${breed}/${subBreed}/images`;
  }

  return `${API_ROOT_URL}/breed/${breed}/images`;
};

export const DEFAULT_REVALIDATE = 4000;

const API_URLS = {
  allBreeds: `${API_ROOT_URL}/breeds/list/all`,
  breed: getBreedAPIUrl,
  getImageFromBreed: (breed: string) => `https://dog.ceo/api/breed/${breed}/images/random` as const,
} as const;

export default API_URLS;
