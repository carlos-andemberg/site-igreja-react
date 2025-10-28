// src/pages/Home.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Vamos criar este arquivo para o estilo
import eventFlyer from '../assets/info.jpg';

function Home() {
    const [copyButtonText, setCopyButtonText] = useState('Copiar Chave');
    const pixKey = '22505554000183'; // Chave Pix sem formatação para cópia

    const handleCopyPix = () => {
        navigator.clipboard.writeText(pixKey).then(() => {
            // Se a cópia for um sucesso
            setCopyButtonText('Copiado!');
            // Volta ao normal depois de 2 segundos
            setTimeout(() => {
                setCopyButtonText('Copiar Chave');
            }, 2000);
        }, () => {
            // Se a cópia falhar
            alert('Não foi possível copiar a chave Pix.');
        });
    };

    return (
        <>
            <section className="hero-section">
                <div className="hero-overlay"></div> {/* Camada para escurecer a imagem */}
                <div className="hero-content">
                    <h1>Bem-vindo à Nossa Casa</h1>
                    <p>Um lugar de fé, esperança e comunidade.</p>
                </div>
            </section>

            <section className="info-section">
                <div className="info-card">
                    <h3>Nossos Cultos</h3>
                    <div className="schedule-list">

                        <div className="schedule-day">
                            <h4>Terça-feira</h4>
                            <ul className="service-list">
                                <li className="service-item">
                                    <span className="service-name">Manhã: Consagração</span>
                                    <span className="service-time">07h30 - 09h00</span>
                                </li>
                                <li className="service-item">
                                    <span className="service-name">Noite: Culto de Ensino</span>
                                    <span className="service-time">19h30</span>
                                </li>
                            </ul>
                        </div>

                        <div className="schedule-day">
                            <h4>Quinta-feira</h4>
                            <ul className="service-list">
                                <li className="service-item">
                                    <span className="service-name">Manhã: Consagração</span>
                                    <span className="service-time">07h30 - 09h00</span>
                                </li>
                                <li className="service-item">
                                    <span className="service-name">Noite: Culto da Vitória</span>
                                    <span className="service-time">19h30</span>
                                </li>
                            </ul>
                        </div>

                        <div className="schedule-day">
                            <h4>Domingo</h4>
                            <ul className="service-list">
                                <li className="service-item">
                                    <span className="service-name">Manhã: Consagração</span>
                                    <span className="service-time">07h30 - 08h30</span>
                                </li>
                                <li className="service-item">
                                    <span className="service-name">Café com o Pastor</span>
                                    <span className="service-time">08h30 - 09h00</span>
                                </li>
                                <li className="service-item">
                                    <span className="service-name">Escola Bíblica Dominical</span>
                                    <span className="service-time">09h00</span>
                                </li>
                                <li className="service-item">
                                    <span className="service-name">Noite: Culto da Família</span>
                                    <span className="service-time">19h00</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="info-card">
                    <h3>Como Chegar</h3>
                    <p>
                        Rua José Lobo de Medeiros, 287<br />
                        Tabuleiro do Martins, Maceió - AL, 57061-100
                    </p>
                    <a
                        href="https://maps.app.goo.gl/DSVGYmbWSZtEjXCy9" /* <<-- ATUALIZE ESTA LINHA */
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-link"
                    >
                        Ver no mapa
                    </a>
                    <div className="desktop-map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.2132344807337!2d-35.7748011!3d-9.576879199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701485740a9e85d%3A0xee81d002c9489c62!2sIgreja%20Assembleia%20de%20Deus%20Madureira%20-%20R.%20Jos%C3%A9%20L%C3%B4bo%20de%20Medeiros%2C%20287%20-%20Tabuleiro%20do%20Martins%2C%20Macei%C3%B3%20-%20AL%2C%2057061-100!5e0!3m2!1spt-BR!2sbr!4v1758617008979!5m2!1spt-BR!2sbr"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

                <div className="info-card">
                    <h3>Dízimos e Ofertas</h3>
                    <p>Contribua com a obra através da nossa chave Pix.</p>
                    <div className="pix-info">
                        <strong>CNPJ:</strong>
                        <span>22.505.554/0001-83</span>
                    </div>
                    <button onClick={handleCopyPix} className="copy-button">
                        {copyButtonText}
                    </button>
                </div>
            </section>
        </>
    );
}

export default Home;