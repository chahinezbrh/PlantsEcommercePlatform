import { create } from "zustand";

export const useStore = create((set) => ({
  user: null,
  login: (userData) => set(() => ({ user: userData })),
  logout: () => set(() => ({ user: null })),
}));