import { useTranslation } from "react-i18next";
import "./_Navbar.scss";
import LanguageSwitcher from "./_LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#about">{t("NAV.ABOUT")}</a>
        </li>
        <li>
          <a href="#projects">{t("NAV.PROJECTS")}</a>
        </li>
        <li>
          <a href="#contact">{t("NAV.CONTACT")}</a>
        </li>
      </ul>

      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
