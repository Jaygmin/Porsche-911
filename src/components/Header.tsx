import { useState } from "react";
import Logo from "@/assets/Logo.svg";

type Language = "ko" | "en";

interface HeaderProps {
  defaultLanguage?: Language;
  onChangeLanguage?: (lang: Language) => void;
}

export default function Header({
  defaultLanguage = "en",
  onChangeLanguage,
}: HeaderProps) {
  const [currentLang, setCurrentLang] = useState<Language>(defaultLanguage);

  const handleLangClick = (lang: Language) => {
    setCurrentLang(lang);
    onChangeLanguage?.(lang);
  };

  return (
    <div className="header">
      <div className="flex-1" />

      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      <div className="language-container">
        <button
          type="button"
          className={currentLang === "ko" ? "selected" : ""}
          onClick={() => handleLangClick("ko")}
        >
          KO
        </button>
        <span>/</span>
        <button
          type="button"
          className={currentLang === "en" ? "selected" : ""}
          onClick={() => handleLangClick("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
}
