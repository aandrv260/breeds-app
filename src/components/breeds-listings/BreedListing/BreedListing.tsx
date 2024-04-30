'use client';

import { useEffect } from 'react';
import { Breed } from '@/models/breeds.models';
import { generateBreedGalleryPageURL, getBreedListingImage } from '@/utils/breed-listing.utils';
import useBreedsListings from '@/hooks/useBreedsListings';
import GalleryCard from '@/components/ui/GalleryCard';
import styles from './BreedListing.module.scss';

type Props = {
  breed: Breed;
};

const BreedListing: React.FC<Props> = ({ breed }) => {
  const { editBreed } = useBreedsListings();

  useEffect(() => {
    const getImageURL = async () => {
      if (breed.imageSrc) return;

      const image = await getBreedListingImage(breed.id);
      editBreed(breed.id, { imageSrc: image });
    };

    getImageURL();
  }, []);

  return (
    <li>
      <GalleryCard
        image={breed.imageSrc ? { src: breed.imageSrc } : null}
        url={generateBreedGalleryPageURL(breed.id)}
      >
        {breed.imageSrc && <span className={styles['breed-listing-label']}>{breed.name}</span>}
      </GalleryCard>
    </li>
  );
};

export default BreedListing;
