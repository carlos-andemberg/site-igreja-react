// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// Importando o novo Header
import Header from './components/Header'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Usando o componente Header aqui! */}

      <main className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;