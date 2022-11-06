import create from 'zustand';
import { persist } from 'zustand/middleware';

const useGrpzStore = create(
  persist(
    (set, get) => ({
      storeWallet: null,
      storeProvider: null,
      storeWorldCoinHash: null,
      storeGroupzList: null,
      storeAccountNfts: null,
      storeSelectedGroup: null,
      selectedGroupMemberz: null,
      test: '123',

      setStoreWallet: (userWallet: any) => {
        //@ts-ignore
        let currentWallet = get().storeWallet;
        if (currentWallet !== userWallet) {
          set({ storeWallet: userWallet });
        }
      },
      setStoreProvider: (provider: any) => {
        set({ storeProvider: provider });
      },

      setStoreWorldCoinHash: (hash: string) => {
        set({ storeWorldCoinHash: hash });
      },

      setStoreGroupzList: (groupzList: any[]) => {
        set({ storeGroupzList: groupzList });
      },

      setStoreAccountNfts: (nfts: any[]) => {
        set({ storeAccountNfts: nfts });
      },

      setStoreSelectedGroup: async (groupData) => {
        set({ storeSelectedGroup: groupData });

        const storeProvider = get().storeProvider;

        console.log('this is the groupdata', groupData.collectionAddress);

        console.log('this is the storeProvider', storeProvider);

        const memberNfts = await storeProvider.send(
          'qn_fetchNFTsByCollection',
          {
            collection: groupData.collectionAddress,
            omitFields: ['imageUrl'],
            page: 1,
            perPage: 20,
          }
        );

        const memberz = await memberNfts.tokens.map(async (nft) => {
          const memberData = await storeProvider.send('qn_getTransfersByNFT', {
            collection: groupData.collectionAddress,
            collectionTokenId: nft.collectionTokenId,
            page: 1,
            perPage: 1,
          });

          let name = await storeProvider.lookupAddress(
            memberData.transfers[0].to
          );

          let avatar = await storeProvider.getAvatar(
            memberData.transfers[0].to
          );

          const memberImgUrl = groupData.imageUrl.replace(
            groupData.collectionTokenId,
            nft.collectionTokenId
          );

          return {
            avatar: avatar || memberImgUrl,
            member: name || memberData.transfers[0].to,
            txDate: memberData.transfers[0].date,
            collection: groupData.collectionAddress,
            collectionTokenId: nft.collectionTokenId,
          };
        });

        const data = await Promise.all(memberz);
        console.log('store data', data);

        set({ selectedGroupMemberz: data });
      },

      clearGroupMemberz: async () => {
        set({ selectedGroupMemberz: null });
      },
    }),
    {
      name: 'groupz-storage',
      partialize: (state: any) => ({
        test: state.test,
        storeWorldCoinHash: state.storeWorldCoinHash,
      }),
    }
  )
);

export default useGrpzStore;
