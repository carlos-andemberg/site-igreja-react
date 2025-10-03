// src/pages/Sobre.jsx
import './Sobre.css';
import logoSobreImage from '../assets/logo-sobre.jpg';
import fotoPastorDilmo from '../assets/pastor-dilmo.jpg';
import fotoPastoraMarisa from '../assets/pastora-marisa.jpg';
import fotoPastorNilson from '../assets/pastor-nilson.jpg';
import fotoMissionariaLeila from '../assets/missionaria-leila.jpg';

function Sobre() {
    return (
        <div>
            <section className="about-header">
                <div className="intro-image">
                    <img src={logoSobreImage} alt="Fachada da Igreja AD Brás Piracicaba Tabuleiro" />
                </div>
                <div className="about-header-text">
                    <h1>Quem Somos</h1>
                    <p>Conheça um pouco mais sobre nossa comunidade e nossa fé.</p>
                </div>
            </section>

            {/* VAMOS CRIAR UMA NOVA SEÇÃO PARA O LAYOUT DE DUAS COLUNAS */}
            <section className="intro-section">
                <div className="intro-text">
                    <h2>HISTÓRIA DA IGREJA ADMP-TABULEIRO/AL</h2>
                    <p>
                        A Igreja Evangélica Assembleia de Deus Ministério de Madureira Piracicaba Alagoas-AL, fundada no Bairro do Tabuleiro dos Martins, nasceu a partir da visão missionária do nosso Pastor Presidente, Pastor Dilmo dos Santos. Em agosto de 2019, ele fez a aquisição do campo denominado ADMA (Assembleia de Deus Ministério Alagoas), através da nossa Sede Nacional na cidade de Piracicaba-SP.
                    </p>
                    <p>
                        O início dos trabalhos se deu com a continuidade da construção do templo, uma obra que incansavelmente não tem cessado. Atualmente, o Pastor Presidente Executivo, Pr. Nilson Barbosa, e sua esposa, Missionária Leila Conceição, representam o nosso Presidente Pastor Dilmo dos Santos nesta Regional 17 e comemoraram o 6º aniversário do Templo.
                    </p>

                    <div className="board-members">
                        <h4>Demais Membros da Presidência:</h4>
                        <ul>
                            <li><strong>1º Vice Presidente:</strong> Pastor Edmilson Alves Maria</li>
                            <li><strong>2º Vice Presidente:</strong> Pastor Marcelo Eduardo Trevisan</li>
                            <li><strong>3º Vice Presidente:</strong> Antonio Luis Pandolfo Junior</li>
                            <li><strong>1º Secretário:</strong> Pastor Luis Roberto Farias</li>
                            <li><strong>2º Secretário:</strong> Amarinho Dias de Melo Filho</li>
                            <li><strong>1º Tesoureiro:</strong> Pastor Fabio Jose Luciano</li>
                            <li><strong>2º Tesoureiro:</strong> Guilherme Garbin Togni</li>
                        </ul>

                        <h4>Conselho Fiscal:</h4>
                        <ul>
                            <li>Pastor Arnaldo Ramos de Sousa</li>
                            <li>Pastor Juares Santos Silva</li>
                            <li>Pastor Jose Ricardo Paulino</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* O RESTANTE DO CONTEÚDO PERMANECE IGUAL
            <section className="about-content">
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
            </section> */}

            <section className="pastors-section">
                <h2>Nossa Liderança</h2>
                <div className="pastors-grid">

                    <div className="pastor-card">
                        {/* Substituímos a div por uma tag de imagem */}
                        <img src={fotoPastorDilmo} alt="Pastor Dilmo dos Santos" className="pastor-photo" />
                        <h3>Pastor Dilmo dos Santos</h3>
                        <p>Presidente</p>
                    </div>

                    <div className="pastor-card">
                        <img src={fotoPastoraMarisa} alt="Pastora Marisa Galvão" className="pastor-photo" />
                        <h3>Pastora Marisa Galvão</h3>
                        {/* Adicione o título dela aqui, se houver */}
                    </div>

                    <div className="pastor-card">
                        <img src={fotoPastorNilson} alt="Pastor Nilson Barbosa" className="pastor-photo" />
                        <h3>Pastor Nilson Barbosa</h3>
                        <p>Presidente Executivo</p>
                    </div>

                    <div className="pastor-card">
                        <img src={fotoMissionariaLeila} alt="Missionária Leila Conceição" className="pastor-photo" />
                        <h3>Missionária Leila Conceição</h3>
                        {/* Adicione o título dela aqui, se houver */}
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Sobre;