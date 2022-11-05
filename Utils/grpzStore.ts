import create from 'zustand';
import { persist } from 'zustand/middleware';

const useGrpzStore = create(
  persist(
    (set, get) => ({
      storeWallet: null,
      storeProvider: null,
      test: '123',

      setStoreWallet: (userWallet) => {
        set({ storeWallet: userWallet });
      },
      setStoreProvider: (provider) => {
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
