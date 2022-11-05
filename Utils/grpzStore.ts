import create from 'zustand';
import { persist } from 'zustand/middleware';

const useGrpzStore = create(
  persist(
    (set, get) => ({
      storeWallet: null,
      test: '123',

      setWallet: (userWallet) => {
        set({ storeWallet: userWallet });
      },
    }),
    {
      name: 'groupz-storage',
      partialize: (state: any) => ({ test: state.test }),
    }
  )
);

export default useGrpzStore;
