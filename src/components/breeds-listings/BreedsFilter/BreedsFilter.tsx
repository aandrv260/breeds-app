'use client';

import { useState } from 'react';
import styles from './BreedsFilter.module.scss';
import useBreedsListings from '@/hooks/useBreedsListings';

const BreedsFilter = () => {
  const [timer, setTimer] = useState<number | null>(null);
  const { filterBreeds, displayedBreeds } = useBreedsListings();

  const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (timer) clearTimeout(timer);

    const newTimerRef = setTimeout(() => {
      filterBreeds(event.target.value);
    }, 450) as unknown as number;

    setTimer(newTimerRef);
  };

  return (
    <div className={styles.filter}>
      <input
        className={styles['filter__input']}
        type="text"
        placeholder="Type to filter"
        onChange={onFilterChange}
      />
    </div>
  );
};

export default BreedsFilter;
