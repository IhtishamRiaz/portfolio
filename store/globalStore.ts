import { create } from "zustand"
import { SectionNameType } from "@/lib/types"

interface GlobalState {
   activeSection: SectionNameType
   setActiveSection: (activeSection: SectionNameType) => void

   lastClickTime: number
   setLastClickTime: (lastClickTime: number) => void
}


export const useGlobalStore = create<GlobalState>((set) => ({
   activeSection: "Home",
   setActiveSection: (activeSection) => set({ activeSection }),

   lastClickTime: 0,
   setLastClickTime: (lastClickTime) => set({ lastClickTime }),
}))