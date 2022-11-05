import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import useGrpzStore from '../Utils/grpzStore';

if (typeof window === 'undefined') {
  console.log('In server');
  console.log('Hi');
}

const Home: NextPage = () => {
  const storeWallet = useGrpzStore((store: any) => store.storeWallet);
  const setStoreWallet = useGrpzStore((store: any) => store.setStoreWallet);

  // wallet connect button logic

  //if wallet not connected show wallet connect button

  //

  return <> Hello Eth SF </>;
};

export default Home;
