import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("StreamX-theme") || "forest",
  setTheme: (theme) => {
    localStorage.setItem("StreamX-theme", theme);
    set({ theme });
  },
}));
