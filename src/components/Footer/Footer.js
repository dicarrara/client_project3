import React from 'react';
import './Footer.css';


const Footer = () => (
  <footer>
    <div className="text-center">
      <p> &copy; {new Date().getFullYear()} Copyright: RDSproduction</p>
    </div>
  </footer>
);

export default Footer;
