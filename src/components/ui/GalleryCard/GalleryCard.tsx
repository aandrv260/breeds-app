'use client';

import { ImageModel } from '@/models/common.models';
import ImageSkeleton from '../ImageSkeleton/ImageSkeleton';
import Image from 'next/image';
import styles from './GalleryCard.module.scss';
import { PropsWithChildren } from 'react';
import Link from 'next/link';

type Props = PropsWithChildren & {
  image: ImageModel | null;
  url?: string;
  className?: string;
  onClick?: () => void;
};

const GalleryCard: React.FC<Props> = ({ image, url, className, children, onClick }) => {
  if (url) {
    return (
      <Link
        className={`${styles['gallery-card']} ${!image ? styles['image-loading'] : ''} ${
          className ?? ''
        }`}
        href={url}
        onClick={onClick}
      >
        {image ? (
          <Image
            className={styles['gallery-card__img']}
            src={image.src}
            alt={image.alt ?? 'Dog image'}
            width={250}
            height={250}
          />
        ) : (
          <ImageSkeleton />
        )}

        {children}
      </Link>
    );
  }

  return (
    <div
      className={`${styles['gallery-card']} ${!image ? styles['image-loading'] : ''} ${
        className ?? ''
      }`}
    >
      {image ? (
        <Image
          className={styles['gallery-card__img']}
          src={image.src}
          alt={image.alt ?? 'Dog image'}
          width={250}
          height={250}
        />
      ) : (
        <ImageSkeleton />
      )}

      {children}
    </div>
  );
};

export default GalleryCard;
