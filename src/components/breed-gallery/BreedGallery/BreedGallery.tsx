'use client';

import Grid from '@/components/layout/Grid';
import BreedGalleryItem from '../BreedGalleryItem';

type Props = {
  data: string[];
};

const BreedGallery: React.FC<Props> = ({ data }) => {
  return (
    <Grid columns={4} asList>
      {data.map(curImage => (
        <li key={curImage}>
          <BreedGalleryItem image={curImage} />
        </li>
      ))}
    </Grid>
  );
};

export default BreedGallery;
