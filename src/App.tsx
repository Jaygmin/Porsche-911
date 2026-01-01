import Header from "./components/Header";
import InfoItem from "./components/InfoItem";
import { Button } from "./components/ui/button";
import { Trans, useTranslation } from "react-i18next";
import { carSpecs } from "./constant/carSpecs";
import { ArrowRight } from "lucide-react";
import Porsche from "@/assets/Porsche.svg";

export default function App() {
  const { t } = useTranslation();

  const moveScroll = () => {
    const section = document.getElementById("second");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  const paragraphs = t("left-subtitle", { returnObjects: true }) as string[];

  return (
    <>
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
      </div>
      <div id="second" className="second-container">
        <div className="left-items">
          <div className="left-title-wrapper">
            <h1 className="left-title">Porsche 911 Turbo S</h1>
            <p className="left-subtitle">
              {paragraphs.map((_, i) => (
                <span key={i}>
                  <Trans
                    i18nKey={`left-subtitle.${i}`}
                    components={{
                      strong: <strong className="font-medium" />,
                    }}
                  />
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div className="info-wrapper">
            {carSpecs.map((item) => (
              <InfoItem
                key={item.key}
                title={t(`specs.${item.key}`)}
                value={item.value}
              />
            ))}
          </div>

          <Button
            variant="outline"
            className="border-black hover:bg-black hover:text-white"
          >
            <p>{t("read")}</p>
            <ArrowRight />
          </Button>
        </div>

        <div className="right-items">
          <img src={Porsche} alt="Porsche" />
        </div>
      </div>
    </>
  );
}
