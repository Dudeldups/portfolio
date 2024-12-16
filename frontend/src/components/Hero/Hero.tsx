import {
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";
import { ImNewTab } from "react-icons/im";
import "./Hero.scss";

const Hero = () => {
  // Top section with svg earth background?
  return (
    <section className="hero">
      <div className="hero__intro">
        <h1>Hi, I'm Arne</h1>
        <p>
          <FaLocationDot />
          Dortmund / Germany
        </p>
        <p>Full-Stack Web Developer</p>
        <p>I build cool stuff for the web.</p>
        <p>
          Online, I go by <strong>Dudeldups</strong>.
        </p>

        <ul className="hero__socials">
          <li>
            <a
              href="https://github.com/Dudeldups"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub />
              <span>
                GitHub
                <span className="sr-only">opens in new tab</span>
              </span>
              <ImNewTab />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/arne-jacob/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin />
              <span>
                LinkedIn
                <span className="sr-only">opens in new tab</span>
              </span>
              <ImNewTab />
            </a>
          </li>
        </ul>
      </div>

      <div id="about" className="hero__about">
        <h2>About me</h2>
        <p>
          Hey, my name is Arne Jacob, and I'm a Full-Stack Web Developer.
          JavaScript games got me into coding, and what started as a fun
          challenge kicked off my journey into web development. I focus on
          creating user-friendly interfaces and bringing seamless functionality
          to everything I put my hands on.
        </p>
      </div>

      <div className="hero__cta">
        <h2>Get in touch</h2>
        <p>
          I'm always open to new projects. Whether you have a question or just
          want to say hi, my inbox is always open.
        </p>
        <a href="mailto:hi@dudeldups.dev">Send me an email</a>
        <a href="mailto:hi@dudeldups.dev">
          <FaEnvelope />
        </a>
      </div>

      <div className="hero__elmo">
        <img src="/assets/images/elmo.png" alt="My dog Elmo" />

        <div className="hero__elmo__caption">
          <h2>My dog Elmo</h2>
          <p>
            Meet Elmo, my loyal sidekick. He's always here to keep me company —
            and occasionally steal the spotlight.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
