import Header from "./components/Header";
import { Button } from "./components/ui/button";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  const moveScroll = () => {
    const section = document.getElementById("second");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex h-dvh w-full flex-col">
      <Header />
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
