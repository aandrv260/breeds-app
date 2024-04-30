import styles from './LoadingSpinner.module.scss';

type Props = {
  position?: 'left' | 'center';
};

const LoadingSpinner: React.FC<Props> = ({ position = 'center' }) => {
  const positionClassName = styles[`loading-spinner--${position}`];

  return (
    <div className={`${styles['loading-spinner']} ${positionClassName}`}>
      <div className={styles['loading-spinner__circle']} />
    </div>
  );
};

export default LoadingSpinner;
