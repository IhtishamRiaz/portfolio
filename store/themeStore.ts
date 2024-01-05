import { create } from 'zustand';
import { persist } from 'zustand/middleware'

type ThemeType = "light" | "dark";

interface ThemeState {
   theme: ThemeType;
   toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
   persist(
      (set) => {
         const isWindowDefined = typeof window !== 'undefined';
         const prefersDarkTheme = isWindowDefined && window.matchMedia('(prefers-color-scheme: dark)').matches;

         return {
            theme: prefersDarkTheme ? 'dark' : 'light',
            toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
         };
      },
      {
         name: 'theme-storage'
      }
   )
);

