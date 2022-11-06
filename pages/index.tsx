import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useAccount } from '@web3modal/react';
import useGrpzStore from '../Utils/grpzStore';
import { ethers } from 'ethers';
import { Loading } from '@nextui-org/react';
import _ from 'underscore';

import WorldCoin from '../Components/WorldCoin';
import WalletConnectView from '../Components/WalletConnectView';
import UserHome from './userhome';

if (typeof window === 'undefined') {
  console.log('This is the server');
}

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const storeWallet = useGrpzStore((store: any) => store.storeWallet);
  const setStoreWallet = useGrpzStore((store: any) => store.setStoreWallet);
  const storeProvider = useGrpzStore((store: any) => store.storeProvider);
  const setStoreProvider = useGrpzStore((store: any) => store.setStoreProvider);
  const storeWorldCoinHash = useGrpzStore(
    (store: any) => store.storeWorldCoinHash
  );
  const storeGroupzList = useGrpzStore((store: any) => store.storeGroupzList);
  const setStoreGroupzList = useGrpzStore(
    (store: any) => store.setStoreGroupzList
  );
  const storeAccountNfts = useGrpzStore((store: any) => store.storeAccountNfts);
  const setStoreAccountNfts = useGrpzStore(
    (store: any) => store.setStoreAccountNfts
  );

  const { account } = useAccount();

  useEffect(() => {
    if (account.address !== 'undefined') {
      // setStoreWallet(account);
    }
  }, [account]);

  // set up provider
  useEffect(() => {
    if (storeProvider === null) {
      // setLoading(true);
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
      // setLoading(false);
    }
  }, [storeProvider]);

  useEffect(() => {
    const getNFTs = async () => {
      console.log('here is the account', storeWallet);
      const currentWallet = storeWallet?.address || account.address;
      // ensure that cached user Acount is the same as the most current account
      if (
        currentWallet === storeAccountNfts?.currentWallet &&
        currentWallet === storeGroupzList.currentWallet
      ) {
        return;
      }
      setLoading(true);
      // using quicknode to get current wallet NFTs
      const nfts = await storeProvider.send('qn_fetchNFTs', {
        wallet: currentWallet,
        omitFields: [],
        page: 1,
        perPage: 40,
        // contracts: [
        //   '0x2106c00ac7da0a3430ae667879139e832307aeaa',
        //   '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
        // ],
      });

      // make a clean list of all the users groups
      const groupzList = _.uniq(nfts.assets, (x: any) => x.collectionName);
      console.log('these are the groupzList', groupzList);
      await setStoreGroupzList({ currentWallet, groupzList });
      setStoreAccountNfts({ currentWallet, nfts: nfts.assets });
      setLoading(false);
      console.log('these are the nfts', nfts);
    };

    if (storeProvider && account.address && storeWorldCoinHash) {
      getNFTs();
    }
  }, [account, storeProvider]);

  if (loading) {
    return <Loading size="xl" />;
  }

  if (account.address && storeWorldCoinHash === null) {
    return <WorldCoin />;
  }

  if (account.address && storeWorldCoinHash) {
    return <UserHome />;
  }

  return (
    <>
      <WalletConnectView />
    </>
  );
};

export default Home;
