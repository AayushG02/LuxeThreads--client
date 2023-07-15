import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

import "./Contact.css"
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <span>BE IN TOUCH WITH US: </span>
        <div className="mail">
          <input className='contact-input' type="email" placeholder="Enter your e-mail..." />
          <button className='contact-btn' >Submit</button>
        </div>
        <div className="contact-icons">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
}

export default Contact