import create from 'zustand';
import { persist } from 'zustand/middleware';

const useGrpzStore = create(
  persist(
    (set, get) => ({
      storeWallet: null,
      storeProvider: null,
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
    }),
    {
      name: 'groupz-storage',
      partialize: (state: any) => ({ test: state.test }),
    }
  )
);

export default useGrpzStore;
