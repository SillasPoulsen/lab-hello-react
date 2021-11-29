import "../navbar.css";
import Logo from "../images/ironhack-logo-xs.png";
import Hamburger from "../images/menu-top-xs.png";

function navbar() {
  return (
    <nav>
      <img className="logo" src={Logo} alt="logo" />
      <img className="hamburger" src={Hamburger} alt="" />
    </nav>
  );
}

export default navbar;
