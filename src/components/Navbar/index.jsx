import Logo from "../../assets/images/IqLogo.svg";
import LanguageSelector from "../LanguageSelector";
import ResponsiveNavbar from "../ResponsiveNavbar";

import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href);
    if (openNav) {
      setOpenNav(false);
    }
  };

  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="navbar">
      <div className=" nav-container ">
        <div className="">
          <a href="/">
            <div className="logo">
              <img src={Logo} alt="Logo" />
              <p>IQTEST.ai</p>
            </div>
          </a>
        </div>
        <div className="nav-links md-flex ">
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
        <div className="language-section md-flex">
          <LanguageSelector />
          <a href="#">
            <button type="button" className="login-btn">
              Login
            </button>
          </a>
        </div>
        <ResponsiveNavbar
          openNav={openNav}
          setOpenNav={setOpenNav}
          activeLink={activeLink}
          handleClick={handleClick}
        />
      </div>
    </nav>
  );
};
export default Navbar;
