import "./Header.scss";
import Navbar from "./_Navbar";

const Header = () => {
  return (
    <header className="header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <a href="#">D</a>

      <Navbar />
    </header>
  );
};

export default Header;
