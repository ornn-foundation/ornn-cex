import React from 'react';
import Head from 'next/head';
import Hello from '../components/Hello/Hello';
import { useGet } from '../hooks';

const Home = () => {
  const { loading, data } = useGet({ path: '/posts' });
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Hello />
        {!loading && JSON.stringify(data)}
      </main>
    </div>
  );
};

export default Home;
