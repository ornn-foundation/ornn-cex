import React, { CSSProperties } from 'react';
import { Children } from '../../@types/children';
import styles from './Layout.module.scss';

interface Props extends Children {
  style?: CSSProperties | undefined;
}

const Layout = ({ children, style }: Props) => {
  return (
    <div className={styles.container} {...{ style }}>
      {children}
    </div>
  );
};

const Menu = ({ children, style }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.menu} {...{ style }}>
        {children}
      </div>
    </header>
  );
};

const Main = ({ children, style }: Props) => {
  return (
    <main className={styles.main} {...{ style }}>
      {children}
    </main>
  );
};

const Content = ({ children, style }: Props) => {
    return (
      <div className={styles.content} {...{ style }}>
        {children}
      </div>
    );
  };

const Sidebar = ({ children, style }: Props) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menu} {...{ style }}>
        {children}
      </div>
    </div>
  );
};

Layout.Menu = Menu;
Layout.Main = Main;
Layout.Content = Content;
Layout.Sidebar = Sidebar;

export default Layout;
