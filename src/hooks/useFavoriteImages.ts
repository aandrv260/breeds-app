import { FavoriteImagesContext } from '@/store/favorite-images-context';
import { useCallback, useContext } from 'react';

/**
 *
 * @returns Utility functions and values to work with favorite images feature
 */
const useFavoriteImages = () => {
  const { images, setImages } = useContext(FavoriteImagesContext);
  const favoriteImagesCount = images.length;

  const addToFavoriteImages = useCallback(
    (imageURL: string) => {
      setImages(prevState => [...prevState, imageURL]);
    },
    [setImages]
  );

  const removeFromFavoriteImages = useCallback(
    (imageURL: string) => {
      setImages(prevState => {
        const allFavorites = [...prevState];
        const indexOfImageToRemove = allFavorites.findIndex(curImage => curImage === imageURL);

        if (indexOfImageToRemove === -1) return prevState;

        allFavorites.splice(indexOfImageToRemove, 1);
        return allFavorites;
      });
    },
    [setImages]
  );

  const toggleFavoriteImage = useCallback(
    (imageURL: string) => {
      const imageIsFavorite = images.includes(imageURL);
      console.log({ imageIsFavorite, imageURL });
      imageIsFavorite ? removeFromFavoriteImages(imageURL) : addToFavoriteImages(imageURL);
    },
    [addToFavoriteImages, images, removeFromFavoriteImages]
  );

  const isImageFavorite = useCallback((imageURL: string) => images.includes(imageURL), [images]);

  return {
    images,
    favoriteImagesCount,
    addToFavoriteImages,
    removeFromFavoriteImages,
    toggleFavoriteImage,
    isImageFavorite,
  };
};

export default useFavoriteImages;
