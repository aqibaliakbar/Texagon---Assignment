import LanguageSelector from "../LanguageSelector";
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import "./responsiveNavbar.css"

const ResponsiveNavbar = ({openNav, setOpenNav, handleClick, activeLink}) => {
	return (
    <div>
      <div
        onClick={() => setOpenNav((prev) => !prev)}
        className={`icon-container ${!openNav ? "md-hidden" : ""}`}
      >
        {openNav ? (
          <IoCloseOutline  className="close-icon" />
        ) : (
          <IoMdMenu  className="menu-icon" />
        )}
      </div>
      {openNav && (
        <div className="mobile-menu ">
          <LanguageSelector />
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
            className={activeLink === "/pricing" ? "active" : ""}
            href="/pricing"
            onClick={(e) => handleClick(e, "/pricing")}
          >
            Pro Pricing
          </a>
          <div className="">
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
}
export default ResponsiveNavbar