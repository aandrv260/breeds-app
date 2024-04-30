'use client';

import PageContent from '@/components/layout/PageContent';
import NoContent from '@/components/ui/NoContent';
import type { ErrorPageProps } from '@/models/common.models';

const BreedGalleryErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  return (
    <PageContent heading="Not Found">
      <NoContent>{error.message}</NoContent>
    </PageContent>
  );
};

export default BreedGalleryErrorPage;
