'use client';

import ROUTES from '@/constants/routes';
import Link from 'next/link';
import styles from './Header.module.scss';
import useFavoriteImages from '@/hooks/useFavoriteImages';

const Header = () => {
  const { favoriteImagesCount } = useFavoriteImages();

  return (
    <header className={styles.header}>
      <Link className={styles['header__app-name']} href={ROUTES.breedListing}>
        Doggo
      </Link>

      <Link className={styles['header__favorites-link']} href={ROUTES.favorites}>
        Favorites: {favoriteImagesCount}
      </Link>
    </header>
  );
};

export default Header;
