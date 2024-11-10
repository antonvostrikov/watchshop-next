import { create } from "zustand";

interface IUseStore {
  isSearch: boolean
  inc: () => void
}

const useStore = create<IUseStore>(set => ({
  isSearch: false,
  inc: () => set(state => ({ isSearch: !state.isSearch })),
}))

export default useStore