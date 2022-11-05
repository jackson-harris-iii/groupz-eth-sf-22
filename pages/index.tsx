import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { Web3Modal, Web3Button, useAccount } from '@web3modal/react';
import useGrpzStore from '../Utils/grpzStore';

if (typeof window === 'undefined') {
  console.log('In server');
  console.log('Hi');
}
const config = {
  projectId: 'b943b05f6e72df200c521c18d9e59bb5',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'groupz',
  },
};
const Home: NextPage = () => {
  const storeWallet = useGrpzStore((store: any) => store.storeWallet);
  const setStoreWallet = useGrpzStore((store: any) => store.setStoreWallet);
  const { account } = useAccount();

  useEffect(() => {}, [account]);

  // wallet connect button logic

  //if wallet not connected show wallet connect button

  //

  return (
    <>
      <Web3Modal config={config} />
      <Web3Button />
      <> Hello Eth SF </>
    </>
  );
};

export default Home;
