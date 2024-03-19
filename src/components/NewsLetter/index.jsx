import "./newsletter.css"
import messageIcon from "../../assets/images/newsicon.png"
import Logo from "../../assets/images/IqLogo.svg";

const Newsletter = () => {
	return (
    <div className="news-container">
      <div className="newsletter">
        <div className="newsletter-top">
          <div className="newsletter-top-left">
            <img src={messageIcon} alt="" />
            <p>Keep up with the latest</p>
            <p className="p1">
              Join our newsletter to stay up to date on features and releases.
            </p>
          </div>
          <div className="newsletter-top-right">
            <p className="p2">Stay Upto date</p>
            <div className="newsletter-input">
              <input type="text" placeholder="Enter your email" />
              <button type="button">Subscribe</button>
            </div>
            <p className="p3">
              By subscribing you agree with our Privacy Policy
            </p>
          </div>
        </div>
        <hr />
        <div className="newsletter-bottom">
          <div className="newsletter-bottom-left">
            <div className="logo">
              <img src={Logo} alt="Logo" />
              <p>IQTEST.ai</p>
            </div>
            <p>Test your IQ in a very easy and simple step not complex.</p>
          </div>
          <div className="newsletter-bottom-right">
            <div className="newsletter-bottom-items">
              <p>IQTEST</p>
              <a href="#">Quiz</a>
              <a href="#">Result</a>
              <a href="#">Pricing</a>
            </div>
            <div className="newsletter-bottom-items">
              <p>Support</p>
              <a href="#">Help</a>
              <a href="#">FQA</a>
              <a href="#">Contact</a>
            </div>
            <div className="newsletter-bottom-items">
              <p>Legal</p>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Newsletter