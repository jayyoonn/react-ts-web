import { create } from 'zustand';

interface CounterStore {
  num: number;
  increase: () => void;
}

const useCounterStore = create<CounterStore>()((set) => ({
  num: 0,
  increase: () => set((state) => ({ num: (state.num += 1) })),
}));

export default useCounterStore;
