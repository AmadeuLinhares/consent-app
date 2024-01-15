import { create } from 'zustand'

type GlobalLoaderProps = {
  loading: boolean
  setLoading: (active: boolean) => void
}

export const useGlobalLoader = create<GlobalLoaderProps>((set) => ({
  loading: false,
  setLoading: (loadActived) => set({ loading: loadActived }),
}))
