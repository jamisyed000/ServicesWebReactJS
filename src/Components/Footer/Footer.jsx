import React from 'react';
import './Footer.css'; 
import footerLogo from '../../images/footer-logo.png';
import storeLogo from '../../images/playstore.png';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const footer = () => {
  return (
   <>
<footer  className="footer">
  <div className="container">
    <div className="row">
      <div className="col-4">
      <div className='footer-logo-portion'>
        <img src={footerLogo} alt="logo"  className='footer-img'/>
        <p className='text-gray'>Premium Quality <br /> Mainntance Services</p>
      </div>
      </div>
      <div className="col-4">
      <div className='footer--services'>
        <h1 className='logo-text'>Services</h1>
      <ul className="footer--services-list text-gray d-flex align-items-center">
            <li className="footer-services-item">Air Condition</li>
            <li className="footer-services-item">Electrical</li>
            <li className="footer-services-item">Plumbing</li>
            <li className="footer-services-item">Civil</li>
            <li className="footer-services-item">Maintenance Service</li>
            <li className="footer-services-item">Pest Control</li>
          </ul>
      </div>
      </div>
      <div className="col-4">
      {/* <div className='footer--services'> */}
        <h3 className='logo-text'>Contact</h3>
      <ul className="footer--contact-list text-gray d-flex ">
            <li className="footer-contact-item">Air Condition</li>
            <li className="footer-contact-item">Electrical</li>
            <li className="footer-contact-item">Plumbing</li>
            
          </ul>
      {/* </div> */}
      </div>
      <div className="col-4">
      
      </div>
      <div className="col-4">
      <div className='footer--services'>
        <h3 className='logo-text'>
          Download us on
        </h3>
     <img src={storeLogo} alt="logo" />
      </div>
      </div>
      <div className="col-4">
      {/* <div className='footer--services'> */}
        <h3 className=''>Follow us on</h3>
    <div className='footer-icons'>
    <FaFacebookF className='mx-2'/>
     <FaInstagram className='mx-2'/>
    <FaLinkedinIn className='mx-2'/>
    </div>
      {/* </div> */}
      </div>
      <div className="col-12">

      </div>
    </div>
  </div>
</footer>
 
   </>
  );
};

export default footer;
