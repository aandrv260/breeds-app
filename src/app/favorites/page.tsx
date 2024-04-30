import FavoriteBreeds from '@/components/favorites/FavoriteBreeds';
import PageContent from '@/components/layout/PageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Favorite Breeds | Doggo',
  description: 'Your favorite breeds in one place. Enjoy them!',
};

const FavoriteBreedsPage = () => {
  return (
    <PageContent heading="Favorites">
      <FavoriteBreeds />
    </PageContent>
  );
};

export default FavoriteBreedsPage;
