// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import './Home.css'; // Vamos criar este arquivo para o estilo
import eventFlyer from '../assets/info.jpg';

function Home() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-overlay"></div> {/* Camada para escurecer a imagem */}
                <div className="hero-content">
                    <h1>Bem-vindo à Nossa Casa</h1>
                    <p>Um lugar de fé, esperança e comunidade.</p>
                    <Link to="/sobre" className="hero-button">
                        Conheça nossa história
                    </Link>
                </div>
            </section>

            {/* VAMOS ADICIONAR A NOVA SEÇÃO AQUI */}
            <section className="event-highlight">
                <div className="event-image-container">
                    <img src={eventFlyer} alt="Flyer da Festividade do Templo" />
                </div>
                <div className="event-content">
                    <h2>Próximo Evento: Festividade do Templo!</h2>
                    <p>Venha celebrar conosco 6 anos de história. Um ano de coisas maiores!</p>
                    <div className="event-details">
                        <span>🗓️ 27 de Setembro</span>
                        <span>⏰ às 19h00</span>
                    </div>
                </div>
            </section>
            {/* FIM DA NOVA SEÇÃO */}

            {/* Aqui podemos adicionar mais seções no futuro */}

            <section className="info-section">
                <div className="info-card">
                    <h3>Nossos Cultos</h3>
                    <p><strong>Terça-feira: Culto de Ensino</strong><br />19h30</p>
                    <p><strong>Quinta-feira: Culta da Vitória</strong><br />19h30</p>
                    <p><strong>Domingo: Culto da Família</strong><br />19h00</p>
                </div>

                <div className="info-card">
                    <h3>Como Chegar</h3>
                    <p>
                        Rua José Lobo de Medeiros, 287<br />
                        Tabuleiro do Martins, Maceió - AL, 57061-100
                    </p>
                    <a
                        href="https://maps.google.com/?cid=17186246363408014434&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" /* <<-- ATUALIZE ESTA LINHA */
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-link"
                    >
                        Ver no mapa
                    </a>
                </div>
            </section>
        </>
    );
}

export default Home;