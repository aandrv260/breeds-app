'use client';

import { useEffect, useState } from 'react';
import AllBreeds from '../AllBreeds';
import BreedsFilter from '../BreedsFilter';
import { Breed } from '@/models/breeds.models';
import useBreedsListings from '@/hooks/useBreedsListings';

type Props = {
  allBreeds: Breed[];
};

const BreedsContent: React.FC<Props> = ({ allBreeds }) => {
  const { breeds, setBreeds } = useBreedsListings();

  useEffect(() => {
    const breedsHaveImages = breeds.some(curBreed => curBreed.imageSrc);

    if (breedsHaveImages) return;

    setBreeds(allBreeds);
  }, [breeds, allBreeds, setBreeds]);

  return (
    <div>
      <BreedsFilter />
      <AllBreeds />
    </div>
  );
};

export default BreedsContent;
