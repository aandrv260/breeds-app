import { Metadata } from 'next';
import BreedGallery from '@/components/breed-gallery/BreedGallery/BreedGallery';
import PageContent from '@/components/layout/PageContent';
import type { PageProps } from '@/models/common.models';
import { fetchBreedGalleryImages, redirectToClosestBreedGalleryPage } from '@/data/breed-gallery';
import { formatBreedNameFromId } from '@/utils/breed-listing.utils';
import { notFound } from 'next/navigation';

type Params = {
  breedNames: string[];
};

export const revalidate = 4000;

export const generateMetadata = ({ params }: PageProps<Params>): Metadata => {
  const [breed, subBreed] = params.breedNames;
  const formattedBreedName = formatBreedNameFromId(`${breed}/${subBreed ?? ''}`);

  return {
    title: `${formattedBreedName} breed gallery | Doggo`,
    description: `Check out nice images of the ${formattedBreedName} breed`,
  };
};

const BreedGalleryPage = async ({ params }: PageProps<Params>) => {
  const [breed, subBreed] = params.breedNames;

  if (params.breedNames.length > 2) {
    redirectToClosestBreedGalleryPage(breed, subBreed);
    return;
  }

  const data = await fetchBreedGalleryImages(breed, subBreed);

  if (data.status === 'error') {
    notFound();
  }

  const formattedBreedName = formatBreedNameFromId(subBreed ? `${breed}/${subBreed}` : breed);

  return (
    <PageContent heading={formattedBreedName} backButton>
      <BreedGallery data={data.message} />
    </PageContent>
  );
};

export default BreedGalleryPage;
