import React, { CSSProperties, ReactElement } from 'react';
import { Children } from '../../@types/children';
import styles from './Container.module.scss';

interface Props extends Children {
  style?: CSSProperties | undefined;
}

const Container = ({ children, style }: Props): ReactElement => {
  return (
    <div className={styles.container} {...{ style }}>
      {children}
    </div>
  );
};

const Content = ({ children, style }: Props): ReactElement => {
  return (
    <div className={styles.content} {...{ style }}>
      {children}
    </div>
  );
};

Container.Content = Content;

export default Container;
