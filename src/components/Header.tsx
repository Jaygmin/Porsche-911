import Logo from "@/assets/Logo.svg";
import { useLangStore } from "@/store/useLangStore";

export default function Header() {
  const { lang, setLang } = useLangStore();

  return (
    <div className="header">
      <div className="flex-1" />

      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      <div className="language-container">
        <button
          type="button"
          className={lang === "ko" ? "selected" : ""}
          onClick={() => setLang("ko")}
        >
          KO
        </button>
        <span>/</span>
        <button
          type="button"
          className={lang === "en" ? "selected" : ""}
          onClick={() => setLang("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
}
