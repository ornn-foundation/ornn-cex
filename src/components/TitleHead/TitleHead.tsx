import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
}

const TitleHead = ({ title = 'Create Next App' }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default TitleHead;
