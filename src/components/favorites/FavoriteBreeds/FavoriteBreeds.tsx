'use client';

import Link from 'next/link';
import Grid from '@/components/layout/Grid';
import NoContent from '@/components/ui/NoContent/NoContent';
import ROUTES from '@/constants/routes';
import useFavoriteImages from '@/hooks/useFavoriteImages';
import styles from './FavoriteBreeds.module.scss';
import BreedGalleryItem from '@/components/breed-gallery/BreedGalleryItem';
import { useEffect } from 'react';
import useBreedsListings from '@/hooks/useBreedsListings';

const FavoriteBreeds = () => {
  const { resetBreedsFilters } = useBreedsListings();
  const { images } = useFavoriteImages();

  useEffect(() => {
    resetBreedsFilters();
  }, [resetBreedsFilters]);

  return (
    <>
      {images.length === 0 && (
        <div className={styles['favorite-breeds-no-content']}>
          <NoContent textColor="inherit">
            You don&lsquo;t have favorite images yet. Click the star icon to add them here.
          </NoContent>

          <Link className={styles['favorite-breeds-no-content__link']} href={ROUTES.breedListing}>
            Back to all breeds
          </Link>
        </div>
      )}

      {images.length > 0 && (
        <Grid columns={4} asList>
          {images.map(curImage => (
            <li key={curImage}>
              <BreedGalleryItem image={curImage} />
            </li>
          ))}
        </Grid>
      )}
    </>
  );
};

export default FavoriteBreeds;
