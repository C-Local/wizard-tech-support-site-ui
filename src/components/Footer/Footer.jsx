import "./Footer.css";
import hat from "../../assets/wizard_company_hat_image.png";
import { useContext } from "react";
import { HiddenPageContext } from "../App/App.jsx";

function Footer() {
  const year = new Date().getFullYear();

  const { hiddenPageStatus, setHiddenPageStatus } =
    useContext(HiddenPageContext);

  return (
    <div className="footer-container">
      <p className="copyright-info">
        &copy;{year} Christian Lanier | CLAN WebDev
      </p>
      <img
        className="mystery-hat"
        src={hat}
        onClick={() => {
          setHiddenPageStatus(false);
        }}
      ></img>
    </div>
  );
}

export default Footer;
