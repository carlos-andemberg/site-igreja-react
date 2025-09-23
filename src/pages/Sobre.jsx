// src/pages/Sobre.jsx
import './Sobre.css'; // Vamos criar este arquivo para os estilos

function Sobre() {
    return (
        <div>
            <section className="about-header">
                <h1>Quem Somos</h1>
                <p>Conheça um pouco mais sobre nossa comunidade e nossa fé.</p>
            </section>

            <section className="about-content">
                <h2>Nossa História</h2>
                <p>
                    Aqui você pode escrever um ou dois parágrafos sobre a fundação da igreja,
                    os momentos marcantes e como a comunidade cresceu ao longo do tempo.
                    É uma ótima oportunidade para compartilhar o testemunho da igreja.
                </p>

                <h2>Missão, Visão e Valores</h2>
                <p>
                    <strong>Missão:</strong> Descreva aqui o propósito principal da igreja. Ex: "Levar a palavra de Deus a todos..."
                </p>
                <p>
                    <strong>Visão:</strong> Onde a igreja se vê no futuro. Ex: "Ser uma igreja relevante para a comunidade..."
                </p>
                <p>
                    <strong>Valores:</strong> Os pilares da igreja. Ex: "Adoração, Comunhão, Serviço..."
                </p>
            </section>

            <section className="pastors-section">
                <h2>Nossa Liderança</h2>
                <div className="pastors-grid">

                    <div className="pastor-card">
                        <div className="pastor-photo-placeholder"></div>
                        <h3>Pastor Dilmo dos Santos</h3>
                        <p>Presidente</p>
                    </div>

                    <div className="pastor-card">
                        <div className="pastor-photo-placeholder"></div>
                        <h3>Pastora Marisa Galvão</h3>
                        {/* Adicione um parágrafo <p> com o título dela se tiver */}
                    </div>

                    <div className="pastor-card">
                        <div className="pastor-photo-placeholder"></div>
                        <h3>Pastor Nilson Barbosa</h3>
                        <p>Presidente Executivo</p>
                    </div>

                    <div className="pastor-card">
                        <div className="pastor-photo-placeholder"></div>
                        <h3>Missionária Leila Conceição</h3>
                        {/* Adicione um parágrafo <p> com o título dela se tiver */}
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Sobre;