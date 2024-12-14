import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__intro">
        <h1>Hi, I'm Arne</h1>
        <p>Full-Stack Web Developer</p>
        <p>I do cool stuff for the web.</p>
      </div>

      <div id="about" className="hero__about">
        <h2>About me</h2>
        <p>
          Hey, I'm Arne Jacob, and I'm a Full-Stack Web Developer. JavaScript
          games got me into coding, and what started as a fun challenge kicked
          off my journey into web development. I focus on creating user-friendly
          interfaces and bringing seamless functionality to everything I put my
          hands on.
        </p>
      </div>

      <div className="hero__cta">
        <h2>Get in touch</h2>
        <p>
          I'm always open to new projects. Whether you have a question or just
          want to say hi, my inbox is always open.
        </p>
        <a href="mailto:hi@dudeldups.dev">Send me an email</a>
      </div>
    </section>
  );
};

export default Hero;
