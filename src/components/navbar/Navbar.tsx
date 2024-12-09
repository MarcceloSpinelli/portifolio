import style from "@/components/navbar/navbar.module.css";
import { useEffect, useState } from "react";
import { Eclipse, Globe } from "lucide-react";
import Image from "next/image";

interface LanguageToken {
  getHello: () => string;
}

interface NavbarProps {
  language: boolean;
  switchLanguage: () => void;
  languageToken: LanguageToken;
}

export default function Navbar({ language, switchLanguage }: NavbarProps) {
  const [theme, setTheme] = useState<string | null>(null);
  const isEnglish = language;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.classList.toggle("dark-theme", savedTheme === "dark");
  }, []);

  const changeTheme = () => {
    if (theme) {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      document.body.classList.toggle("dark-theme", newTheme === "dark");
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <main className={style.navbar}>
      {/* <h1>{languageToken.getHello()}</h1> */}
      <button className={style.btnTheme} onClick={switchLanguage}>
        <div className={style.flagContainer}>
          <Image
            src={isEnglish ? "/portfolio/eua.png" : "/portfolio/brasil.png"}
            alt={isEnglish ? "EUA" : "Brasil"}
            width={30}
            height={30}
            className={style.flagImage}
          />
          <Globe className={style.globeIcon} />
        </div>
      </button>
      <button className={style.btnTheme} onClick={changeTheme}>
        <Eclipse />
      </button>
    </main>
  );
}
