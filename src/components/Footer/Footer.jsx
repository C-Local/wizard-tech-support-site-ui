import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer-container">
      <p className="copyright-info">
        &copy;{year} Christian Lanier | CLAN WebDev
      </p>
    </div>
  );
}

export default Footer;
