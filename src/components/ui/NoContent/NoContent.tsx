import { PropsWithChildren } from 'react';
import styles from './NoContent.module.scss';

type Props = PropsWithChildren & {
  textColor?: 'inherit' | 'red';
  className?: string;
};

const NoContent: React.FC<Props> = ({ textColor = 'red', className, children }) => {
  const textColorClassName = styles[`no-content--${textColor}-text-color`];

  return (
    <h2 className={`${styles['no-content']} ${textColorClassName} ${className ?? ''}`}>
      {children}
    </h2>
  );
};

export default NoContent;
