import "./_Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>Github</li>
        <li>LinkedIn</li>
        <li>Mail</li>
      </ul>

      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
