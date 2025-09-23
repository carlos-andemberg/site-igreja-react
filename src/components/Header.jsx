// src/components/Header.jsx
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; // 1. Importe a logo
import './Header.css'; // Vamos criar este arquivo para o estilo

function Header() {
  return (
    <header className="site-header">
      {/* 2. Use a logo em uma tag <img> */}
      <Link to="/">
        <img src={logo} alt="Logo da Igreja" className="logo" />
      </Link>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre Nós</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;