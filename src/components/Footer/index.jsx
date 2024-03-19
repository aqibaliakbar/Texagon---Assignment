import insta from "../../assets/images/insta.png"
import fb from "../../assets/images/fb.png"
import twitter from "../../assets/images/twitter.png"
import linkedln from "../../assets/images/linkedln.png"
import './footer.css'

const Footer = () => {
	return (
    <div className="footer-container">
      <div className="footer">
        <p>© 2024 IQTEST.AI</p>
        <div className="footer-links">
          <a href="#">
            {" "}
            <img src={insta} alt="insta link" />
          </a>
          <a href="#">
            <img src={fb} alt="fb link" />
          </a>
          <a href="#">
            <img src={twitter} alt="fb link" />
          </a>
          <a href="#">
            <img src={linkedln} alt="linkedIn link" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer