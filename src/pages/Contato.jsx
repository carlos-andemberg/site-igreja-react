// src/pages/Contato.jsx
import './Contato.css';

function Contato() {
    const textoWhatsappPastor = encodeURIComponent("Olá, Pastor Nilson! Encontrei o contato no site da igreja e gostaria de mais informações.");
    const textoWhatsappMissionaria = encodeURIComponent("Olá, Missionária Leila! Encontrei o contato no site da igreja e gostaria de mais informações.");

    return (
        <div>
            <div className="contact-header">
                <h1>Fale Conosco</h1>
                <p>Estamos de portas abertas para receber você e sua família.</p>
            </div>

            <div className="contact-grid">
                <div className="contact-info">
                    <h3>Informações de Contato</h3>
                    
                    {/* ESTRUTURA ATUALIZADA PARA BOTÕES */}
                    <div className="contact-method">
                        <p><strong>Endereço:</strong></p>
                        <p className="address-text">
                            Rua José Lobo de Medeiros, 287<br />
                            Tabuleiro do Martins, Maceió - AL, 57061-100
                        </p>
                    </div>

                    <div className="contact-method">
                        <p><strong>Email:</strong></p>
                        <a href="mailto:Nilsonbarbosa@hotmail.com" className="contact-button email">
                            Enviar um Email
                        </a>
                    </div>
                    
                    <div className="contact-method">
                        <p><strong>WhatsApp: Pastor Nilson</strong></p>
                        <a href={`https://wa.me/5582981201873?text=${textoWhatsappPastor}`} target="_blank" rel="noopener noreferrer" className="contact-button whatsapp">
                            Chamar no WhatsApp
                        </a>
                    </div>

                    <div className="contact-method">
                        <p><strong>WhatsApp: Missionária Leila</strong></p>
                        <a href={`https://wa.me/5582999993756?text=${textoWhatsappMissionaria}`} target="_blank" rel="noopener noreferrer" className="contact-button whatsapp">
                           Chamar no WhatsApp
                        </a>
                    </div>
                </div>

                <div className="contact-map">
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
        </div>
    );
}

export default Contato;