import i18n from "@/locales/i18n";
import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

type Language = "ko" | "en";

export const useLangStore = create(
  persist(
    combine(
      {
        lang: "en" as Language,
      },
      (set) => ({
        setLang: (lang: Language) => {
          i18n.changeLanguage(lang);
          set({ lang });
        },
      }),
    ),
    {
      name: "LangStore",
      onRehydrateStorage: () => (state) => {
        if (state?.lang) {
          i18n.changeLanguage(state.lang);
        }
      },
    },
  ),
);
