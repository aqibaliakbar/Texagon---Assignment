import Logo from "../../assets/images/IqLogo.svg";
import LanguageSelector from "../LanguageSelector";
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href);
  };

  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="navbar">
      <div className=" hidden md-flex nav-container ">
        <div>
          <a href="/">
            <div className="logo">
              <img src={Logo} alt="Logo" />
              <p>IQTEST.ai</p>
            </div>
          </a>
        </div>
        <div className="nav-links">
          <a
            className={activeLink === "/" ? "active" : ""}
            href="/"
            onClick={(e) => handleClick(e, "/")}
          >
            Home
          </a>
          <a
            className={activeLink === "/start-test" ? "active" : ""}
            href="/start-test"
            onClick={(e) => handleClick(e, "/start-test")}
          >
            Start Test
          </a>
          <a
            className={activeLink === "/certificate" ? "active" : ""}
            href=""
            onClick={(e) => handleClick(e, "/certificate")}
          >
            Check Certificate
          </a>
          <a
            className={activeLink === "/pricing" ? "active" : ""}
            href="/pricing"
            onClick={(e) => handleClick(e, "/pricing")}
          >
            Pro Pricing
          </a>
        </div>
        <div className="language-section">
          <LanguageSelector />
          <a href="#">
            <button type="button" className="login-btn">
              Login
            </button>
          </a>
        </div>
        <div
          onClick={() => setOpenNav((prev) => !prev)}
          className={`icon-container ${!openNav ? "md-hidden" : ""}`}
        >
          {openNav ? <IoCloseOutline size={20} /> : <IoMdMenu size={20} />}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
