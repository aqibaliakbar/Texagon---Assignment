import Logo from "../../assets/images/IqLogo.svg";
import LanguageSelectorButton from "../LanguageSelectorButton/index.jsx";
import ResponsiveNavbar from "../Navbar/ResponsiveNavbar/index.jsx";
import "./navbar.css";
import { useState } from "react";

const links = [
  { url: "/", text: "Home" },
  { url: "/start-test", text: "Start Test" },
  { url: "/certificate", text: "Check Certificate" },
  { url: "/pricing", text: "Pro Pricing" },
];

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
    <>
      <nav className="navbar">
        <div className=" nav-container ">
          <div>
            <a href="/">
              <div className="logo">
                <img src={Logo} alt="Logo" />
                <p>IQTEST.ai</p>
              </div>
            </a>
          </div>
          <div className="nav-links md-flex ">
            {links.map((link, index) => (
              <a
                key={index}
                className={`nav-items ${activeLink === link.url ? "active" : ""}`}
                href={link.url}
                onClick={(e) => handleClick(e, link.url)}
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="button-nav-section md-flex">
            <LanguageSelectorButton />
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
    </>
  );
};
export default Navbar;
