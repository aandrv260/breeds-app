'use client';

import GalleryCard from '@/components/ui/GalleryCard/GalleryCard';
import useFavoriteImages from '@/hooks/useFavoriteImages';
import styles from './BreedGalleryItem.module.scss';
import StarIcon from '@/components/ui/StarIcon/StarIcon';

type Props = {
  image: string;
};

const BreedGalleryItem: React.FC<Props> = ({ image }) => {
  const { isImageFavorite, toggleFavoriteImage } = useFavoriteImages();
  const imageIsInFavorites = isImageFavorite(image);

  return (
    <GalleryCard image={{ src: image }}>
      <button
        className={styles['breed-gallery-favorite-button']}
        onClick={() => toggleFavoriteImage(image)}
      >
        <StarIcon filled={imageIsInFavorites} />
        <span className="sr-only">{imageIsInFavorites ? 'Remove from' : 'Add to'} Favorites</span>
      </button>
    </GalleryCard>
  );
};

export default BreedGalleryItem;
