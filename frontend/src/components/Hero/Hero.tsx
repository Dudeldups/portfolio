import {
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";
import { ImNewTab } from "react-icons/im";
import "./Hero.scss";
import { Trans, useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  // Top section with svg earth background?

  return (
    <section className="hero">
      <div className="hero__intro">
        <hgroup>
          <h1>{t("HERO.TITLE")}</h1>
          <p>
            <FaLocationDot aria-hidden="true" />
            <span className="sr-only">{t("HERO.LOCATION_DESCR")}</span>{" "}
            {t("HERO.LOCATION")}
          </p>
          <p>{t("HERO.ROLE")}</p>
          <p>{t("HERO.INTRO")}</p>
          <p>
            <Trans i18nKey="HERO.ALIAS">
              Online, I go by <strong>Dudeldups</strong>.
            </Trans>
          </p>
        </hgroup>

        <ul className="hero__socials">
          <li>
            <a href="mailto:hi@dudeldups.dev">
              <FaEnvelope aria-hidden="true" />
              <span>Email</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Dudeldups"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub aria-hidden="true" />
              <span>
                GitHub
                <span className="sr-only">{t("GENERAL.OPENS_IN_NEW_TAB")}</span>
              </span>
              <ImNewTab aria-hidden="true" className="new-tab" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/arne-jacob/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin aria-hidden="true" />
              <span>
                LinkedIn
                <span className="sr-only">{t("GENERAL.OPENS_IN_NEW_TAB")}</span>
              </span>
              <ImNewTab aria-hidden="true" className="new-tab" />
            </a>
          </li>
        </ul>
      </div>

      <div id="about" className="hero__about">
        <hgroup>
          <h2>{t("ABOUT.TITLE")}</h2>
          <p>{t("ABOUT.DESCRIPTION")}</p>
        </hgroup>
      </div>

      <div className="hero__elmo">
        <figure>
          <img src="/assets/images/elmo.png" alt="My dog Elmo" />

          <figcaption>
            <h2>{t("ELMO.TITLE")}</h2>
            <p>{t("ELMO.DESCRIPTION")}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
