'use client';

import Grid from '@/components/layout/Grid';
import BreedListing from '../BreedListing';
import useBreedsListings from '@/hooks/useBreedsListings';
import NoContent from '@/components/ui/NoContent/NoContent';
import { useEffect, useState } from 'react';

const AllBreeds: React.FC = () => {
  const [pageLoadedInitially, setPageLoadedInitially] = useState(false);
  const { displayedBreeds } = useBreedsListings();

  useEffect(() => {
    setPageLoadedInitially(true);
  }, []);

  return (
    <>
      {displayedBreeds.length === 0 && pageLoadedInitially && (
        <NoContent>No breeds found</NoContent>
      )}

      {displayedBreeds.length > 0 && (
        <Grid columns={4} asList>
          {displayedBreeds.map(curBreed => (
            <BreedListing breed={curBreed} key={curBreed.id} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default AllBreeds;
