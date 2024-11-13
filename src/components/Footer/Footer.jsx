import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
