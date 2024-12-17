import { useTranslation } from "react-i18next";
import "./_LanguageSwitcher.scss";
import Flag from "react-country-flag";

const LanguageSwitcher = () => {
  const availableLanguages = [
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
  ];

  const { i18n } = useTranslation();

  return (
    <div>
      <select
        className="language-switcher"
        onChange={event => i18n.changeLanguage(event.target.value)}
        value={i18n.language}>
        {availableLanguages.map(language => (
          <option key={language.code} value={language.code}>
            <Flag
              countryCode={language.code.toUpperCase()}
              svg
              title={language.code.toUpperCase()}
            />
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
