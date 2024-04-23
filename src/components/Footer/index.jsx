import { NavLink } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <h3>Qr menu için iletişim</h3>
      <p>emrullahucel@gmail.com</p>
      <NavLink className="hidden" to="/admin">
        admin paneli
      </NavLink>
    </footer>
  );
};

export default Footer;
