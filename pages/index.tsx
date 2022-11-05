import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Web3Modal, Web3Button, useAccount } from '@web3modal/react';
import useGrpzStore from '../Utils/grpzStore';
import { ethers } from 'ethers';
import { Loading } from '@nextui-org/react';

if (typeof window === 'undefined') {
  console.log('This is the server');
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
  const [loading, setLoading] = useState(true);
  const storeWallet = useGrpzStore((store: any) => store.storeWallet);
  const setStoreWallet = useGrpzStore((store: any) => store.setStoreWallet);
  const storeProvider = useGrpzStore((store: any) => store.storeProvider);
  const setStoreProvider = useGrpzStore((store: any) => store.setStoreProvider);
  const { account } = useAccount();

  useEffect(() => {}, [account]);

  useEffect(() => {
    if (storeProvider === null) {
      const provider = new ethers.providers.JsonRpcProvider(
        'https://sly-powerful-star.matic-testnet.discover.quiknode.pro/a07339481a77e5252708847a721a86e600bb2c22/'
      );
      provider.connection.headers = { 'x-qn-api-version': 1 };

      setStoreProvider(provider);
    }
  }, [storeProvider]);

  // wallet connect button logic

  //if wallet not connected show wallet connect button

  //

  if (loading) {
    return <Loading size="xl" />;
  }

  return (
    <>
      <Web3Modal config={config} />
      <Web3Button />
      <> Hello Eth SF </>
    </>
  );
};

export default Home;
