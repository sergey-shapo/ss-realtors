import { create } from "zustand";

interface MenuStoreProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const useMenuStore = create<MenuStoreProps>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
