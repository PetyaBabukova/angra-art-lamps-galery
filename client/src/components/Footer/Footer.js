import './Footer.css';
// import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="social-media-logo-container">
                <a
                    href="https://www.facebook.com/%D0%90%D0%BD%D0%B3%D1%80%D0%B0-%D0%90%D1%80%D1%82-105801884214393"
                >
                    <i className="fab fa-facebook-square"></i>
                </a>
            
                <a
                    href="https://www.facebook.com/%D0%90%D0%BD%D0%B3%D1%80%D0%B0-%D0%90%D1%80%D1%82-105801884214393"
                >
                    <i className="fab fa-facebook-messenger icon"></i>
                </a>
            </div>
            <p className="all-rights">All rights reserved <i className="far fa-registered"></i></p>
        </footer>
    )
};

export default Footer;