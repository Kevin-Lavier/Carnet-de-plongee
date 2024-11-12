import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Mon Carnet de Plongée</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/connexion">Connexion</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
