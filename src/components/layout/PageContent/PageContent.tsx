'use client';

import { PropsWithChildren } from 'react';
import styles from './PageContent.module.scss';
import { useRouter } from 'next/navigation';

type Props = PropsWithChildren & {
  heading: string;
  backButton?: boolean;
};

/**
 * The default page layout that each page will have. The heading will be different for each page so it must be used on the page components and not on the `layout.tsx` itself
 */
const PageContent: React.FC<Props> = ({ heading, backButton, children }) => {
  const router = useRouter();

  return (
    <div className={styles['page-content']}>
      <div className={styles['page-content__header']}>
        {backButton && (
          <button
            className={styles['page-content__back-btn']}
            type="button"
            onClick={() => router.back()}
          >
            &larr;
          </button>
        )}
        <h1 className={styles['page-content__heading']}>{heading}</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PageContent;
