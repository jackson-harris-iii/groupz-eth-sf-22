import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Web3Modal, Web3Button, useAccount } from '@web3modal/react';
import useGrpzStore from '../Utils/grpzStore';
import { ethers } from 'ethers';
import { Loading } from '@nextui-org/react';
import _ from 'underscore';

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
  const [loading, setLoading] = useState(false);
  const storeWallet = useGrpzStore((store: any) => store.storeWallet);
  const setStoreWallet = useGrpzStore((store: any) => store.setStoreWallet);
  const storeProvider = useGrpzStore((store: any) => store.storeProvider);
  const setStoreProvider = useGrpzStore((store: any) => store.setStoreProvider);
  const { account } = useAccount();

  useEffect(() => {
    if (account.address !== 'undefined') {
      // setStoreWallet(account);
    }
  }, [account]);

  useEffect(() => {
    if (storeProvider === null) {
      const provider = new ethers.providers.JsonRpcProvider(
        'https://orbital-palpable-yard.discover.quiknode.pro/42da4d17b8effd571b8e22db65cec5e84bad5bf8/'
      );

      let connection = {
        headers: {
          'x-qn-api-version': 1,
        },
      };

      _.extend(provider, connection);
      // console.log('what is init', provider);
      setStoreProvider(provider);
    }
  }, [storeProvider]);

  useEffect(() => {
    const getNFTs = async () => {
      console.log('here is the account', storeWallet);
      const heads = await storeProvider.send('qn_fetchNFTs', {
        wallet: storeWallet?.address || account.address,
        omitFields: ['provenance', 'traits'],
        page: 1,
        perPage: 10,
        // contracts: [
        //   '0x2106c00ac7da0a3430ae667879139e832307aeaa',
        //   '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
        // ],
      });
      console.log('these are the nfts', heads);
    };

    if ((storeProvider && storeWallet?.address) || account.address) {
      getNFTs();
    }
  }, [storeWallet || account, storeProvider]);

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
