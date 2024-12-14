import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Arne Jacob</p>
    </footer>
  );
};

export default Footer;
