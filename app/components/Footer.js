import React from 'react';
import * as footerStyles from "./footer.module.css";
import * as headerStyles from "./header.module.css";
import logo from "../images/logo.png";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <p className="col-md-4 mb-0 text-muted">© 2024 Retrobeats</p>
        <ul className={footerStyles.nav}>
          <li className="nav-item"><a href="#" className={`nav-link ${footerStyles.link}`}>Home &nbsp; </a>  </li>
          <li className="nav-item"><a href="#" className={`nav-link ${footerStyles.link}`}>Features&nbsp;</a></li>
          <li className="nav-item"><a href="#" className={`nav-link ${footerStyles.link}`}>Pricing&nbsp;</a></li>
          <li className="nav-item"><a href="#" className={`nav-link ${footerStyles.link}`}>FAQs&nbsp;</a></li>
          <li className="nav-item"><a href="#" className={`nav-link ${footerStyles.link}`}>About&nbsp;</a></li>
        </ul>
        <Image src={logo} alt="logo retrobeats" className={footerStyles.logo} />
      </div>
    </footer>
  );
};

export default Footer;