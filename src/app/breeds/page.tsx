import PageContent from '@/components/layout/PageContent';
import { generateAllBreedsContextData } from '@/utils/breed-listing.utils';
import { getAllBreedsInfo } from '@/data/breeds-listings';
import { Metadata } from 'next';
import BreedsContent from '@/components/breeds-listings/BreedsContent';

export const metadata: Metadata = {
  title: 'All Breeds | Doggo',
};

const BreedsListingPage = async () => {
  const data = await getAllBreedsInfo();
  const allBreeds = generateAllBreedsContextData(data);

  return (
    <PageContent heading="Breeds">
      <BreedsContent allBreeds={allBreeds} />
    </PageContent>
  );
};

export default BreedsListingPage;
