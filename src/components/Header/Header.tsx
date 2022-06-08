import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a>Header</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
