import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

if (typeof window === 'undefined') {
  console.log('In server');
  console.log('Hi');
}

const Home: NextPage = () => {
  return <> Hello Eth SF </>;
};

export default Home;
