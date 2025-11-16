import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Button } from "./components/ui/button";
import { useTranslation } from "react-i18next";
import i18n from "./locales/i18n";

export default function App() {
  const [language, setLanguage] = useState<"ko" | "en">("en");
  const moveScroll = (): void => {
    document.getElementById("second")?.scrollIntoView({ behavior: "smooth" });
  };
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <div className="flex h-dvh w-full flex-col">
      <Header onChangeLanguage={(lang) => setLanguage(lang)} />
      <div className="main-container">
        <div className="title-wrapper">
          <h1 className="title">{t("title")}</h1>
          <h4 className="subtitle">{t("subtitle")}</h4>
          <span className="button-wrapper">
            <Button onClick={moveScroll} variant="ghost" size="lg">
              {t("read")}
            </Button>
          </span>
        </div>
      </div>
      <div id="second" className="second-container"></div>
    </div>
  );
}
