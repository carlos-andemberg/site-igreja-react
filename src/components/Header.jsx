// src/components/Header.jsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logoPrincipal from '../assets/logo.svg';
import logoDireita from '../assets/logo-lateral.jpg'

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
        <Link to="/" className='father' onClick={closeMobileMenu}>
          <span className='title'>ASSEMBLEIA DE DEUS</span>
          <span className='subtitle'>MINISTÉRIO MADUREIRA</span>
          <span className='subtitle'>PIRACICABA</span>
        </Link>
      </div>

      <div className="header-center-right">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logoDireita} alt="Logo da Igreja" className="logo-lateral" />
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