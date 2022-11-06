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
            omitFields: ['imageUrl', 'traits'],
            page: 1,
            perPage: 20,
          }
        );

        set({ selectedGroupMemberz: memberNfts });
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
