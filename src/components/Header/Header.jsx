import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Mon Carnet de Plongée</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/login">Connexion</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
