import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import "./responsiveNavbar.css";
import { links } from "../../../data/data";
import LanguageSelectorButton from "../../LanguageSelectorButton";

const ResponsiveNavbar = ({ openNav, setOpenNav, handleClick, activeLink }) => {
  return (
    <div>
      <div
        onClick={() => setOpenNav((prev) => !prev)}
        className={`icon-container ${!openNav ? "md-hidden" : ""}`}
      >
        {openNav ? (
          <IoCloseOutline className="close-icon" />
        ) : (
          <IoMdMenu className="menu-icon" />
        )}
      </div>
      {openNav && (
        <div className={`mobile-menu `}>
          <LanguageSelectorButton />
          {links.map(
            (link, index) =>
              index !== 2 && (
                <a
                  key={index}
                  className={` menu-links ${
                    activeLink === link.url ? "active" : ""
                  }`}
                  href={link.url}
                  onClick={(e) => handleClick(e, link.url)}
                >
                  {link.text}
                </a>
              )
          )}
          <div>
            <a href="#">
              <button type="button" className="login-btn">
                Login
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default ResponsiveNavbar;
