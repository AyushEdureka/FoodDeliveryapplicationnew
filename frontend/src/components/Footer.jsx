import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">ZOMATO</h4>
            <ul className="list-unstyled mt-3">
              <li>Zomato</li>
              <li>Blinkit</li>
              <li>District</li>
              <li>HyperPure</li>
              <li>Feeding India</li>
              <li>Investor Relations</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">For Restaurants</h6>
            <ul className="list-unstyled mt-3">
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">For Delivery Partners</h6>
            <ul className="list-unstyled mt-3">
              <li>Partner With Us</li>
              <li>Apps For You</li>
              <li>
                <a  style={{textDecoration:'none', color:'white'}} href="/Support">Support</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Social Links</h6>
            <div className="d-flex gap-3 mb-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-light">
                <FaYoutube size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light">
                <FaLinkedin size={20} />
              </a>
            </div>

            <div className="mb-2">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png"
                alt="App Store"
                className="img-fluid mb-2"
                style={{ maxWidth: '120px' }}
              />
            </div>
            <div>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png"
                alt="Google Play"
                className="img-fluid"
                style={{ maxWidth: '135px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;