import { Breed } from '@/models/breeds.models';
import { BreedsListingsContext } from '@/store/breeds-listings-context';
import { useCallback, useContext, useMemo } from 'react';
import { cloneDeep } from 'lodash';
import Fuse from 'fuse.js';

const useBreedsListings = () => {
  const { breeds, setBreeds } = useContext(BreedsListingsContext);

  const displayedBreeds = useMemo(() => {
    return breeds.filter(curBreed => curBreed.displayed);
  }, [breeds]);

  const resetBreedsFilters = useCallback(() => {
    setBreeds(prevState => {
      return prevState.map(curBreed => ({
        ...curBreed,
        displayed: true,
      }));
    });
  }, [setBreeds]);

  const findBreedById = useCallback(
    (breedId: string): Breed | null => {
      return breeds.find(curBreed => curBreed.id === breedId) ?? null;
    },
    [breeds]
  );

  const editBreed = useCallback(
    (breedId: string, data: Partial<Breed>) => {
      setBreeds(prevState => {
        const newBreeds = cloneDeep(prevState);
        const breedIndex = newBreeds.findIndex(curBreed => curBreed.id === breedId) ?? null;

        if (breedIndex === -1) return prevState;

        newBreeds[breedIndex] = {
          ...newBreeds[breedIndex],
          ...data,
        };

        return newBreeds;
      });
    },
    [setBreeds]
  );

  const filterBreeds = useCallback(
    (query: string) => {
      const filterQueryFormatted = query.trim();

      setBreeds(prevState => {
        const allBreeds = cloneDeep(prevState);
        const fuse = new Fuse(allBreeds, {
          keys: ['name'],
          isCaseSensitive: false,
          threshold: 0.3,
        });

        allBreeds.forEach(curBreed => {
          const filterResults = fuse.search(filterQueryFormatted).map(curResult => curResult.item);
          const isCurBreedInFilterResults = Boolean(
            filterResults.find(curResult => curResult.id === curBreed.id)
          );

          curBreed.displayed = filterQueryFormatted === '' || isCurBreedInFilterResults;
        });

        return allBreeds;
      });
    },
    [setBreeds]
  );

  return {
    breeds,
    displayedBreeds,
    setBreeds,
    findBreedById,
    editBreed,
    filterBreeds,
    resetBreedsFilters,
  };
};

export default useBreedsListings;
