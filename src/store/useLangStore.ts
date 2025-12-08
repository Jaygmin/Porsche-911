import i18n from "@/locales/i18n";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Language = "ko" | "en";

interface LangState {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const useLangStore = create<LangState>()(
  persist(
    (set) => ({
      lang: "en",
      setLang: (lang) => {
        i18n.changeLanguage(lang);
        set({ lang });
      },
    }),
    {
      name: "LangStore",
      //   onRehydrateStorage: () => (state) => {
      //     if (state?.lang) {
      //       i18n.changeLanguage(state.lang);
      //     }
      //   },
    },
  ),
);
