import { PropsWithChildren } from 'react';
import styles from './Grid.module.scss';

type Props = PropsWithChildren & {
  asList?: boolean;
  columns: 3 | 4 | 5;
  /**
   * @default 'md'
   */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

const Grid: React.FC<Props> = ({ asList, columns, gap = 'lg', className, children }) => {
  const columnsClassName = styles[`grid--${columns}-cols`];
  const gapClassName = styles[`grid--${gap}-gap`];
  const gridClassName = `${styles.grid} ${columnsClassName} ${gapClassName}  ${className ?? ''}`;

  if (asList) {
    return <ul className={gridClassName}>{children}</ul>;
  }

  return <div className={gridClassName}>{children}</div>;
};

export default Grid;
