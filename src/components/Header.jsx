// src/components/Header.jsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logoPrincipal from '../assets/logo.svg';
import logoCentral from '../assets/logo-central.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="header-left">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logoPrincipal} alt="Logo da Igreja" className="logo-principal" />
        </Link>
      </div>

      <div className="header-center">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logoCentral} alt="Logo AD Brás Piracicaba Tabuleiro" className="logo-central" />
        </Link>
      </div>

      {/* Agrupamos a navegação e o botão */}
      <div className="header-right">
        <nav className={isMobileMenuOpen ? 'nav-active' : ''}>
          <NavLink to="/" onClick={closeMobileMenu}>Início</NavLink>
          <NavLink to="/sobre" onClick={closeMobileMenu}>Sobre</NavLink>
          <NavLink to="/contato" onClick={closeMobileMenu}>Contato</NavLink>
        </nav>
        <button className="hamburger-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;