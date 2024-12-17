import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import "./Contact.scss";
import { useTranslation } from "react-i18next";
import { ImNewTab } from "react-icons/im";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <hgroup>
        <h2>{t("CONTACT.TITLE")}</h2>
        <p>{t("CONTACT.DESCRIPTION")}</p>
      </hgroup>

      <ul className="contact__socials">
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
            <ImNewTab aria-hidden="true" />
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
            <ImNewTab aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
