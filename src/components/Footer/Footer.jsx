<<<<<<< HEAD
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
=======
import "./Footer.css"

function Footer() {

    const year = new Date().getFullYear()

    return(<div className="footer-container">
    <p className="copyright-info">&copy;{year} Christian Lanier | CLAN WebDev</p>
    </div>);
}

export default Footer
>>>>>>> 1613dee4d0a2c4b4332300c9639e4bb059751dfd
