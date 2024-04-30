'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import PageContent from '@/components/layout/PageContent';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import useBreedsListings from '@/hooks/useBreedsListings';
import { formatBreedNameFromId } from '@/utils/breed-listing.utils';

const BreedGalleryLoadingPage = () => {
  const params = useParams();
  const { resetBreedsFilters } = useBreedsListings();
  const [breed, subBreed] = params.breedNames as string[];
  const formattedBreedName = formatBreedNameFromId(`${breed}/${subBreed ?? ''}`);

  useEffect(() => {
    resetBreedsFilters();
  }, [resetBreedsFilters]);

  return (
    <PageContent heading={formattedBreedName} backButton>
      <LoadingSpinner />
    </PageContent>
  );
};

export default BreedGalleryLoadingPage;
