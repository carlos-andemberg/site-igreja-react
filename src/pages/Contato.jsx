// src/pages/Contato.jsx
import './Contato.css';

function Contato() {
    return (
        <div>
            <div className="contact-header">
                <h1>Fale Conosco</h1>
                <p>Estamos de portas abertas para receber você e sua família.</p>
            </div>

            <div className="contact-grid">
                <div className="contact-info">
                    <h3>Informações de Contato</h3>
                    <p>
                        <strong>Endereço:</strong><br />
                        Rua José Lobo de Medeiros, 287<br />
                        Tabuleiro do Martins, Maceió - AL, 57061-100
                    </p>
                    <p>
                        <strong>Email:</strong><br />
                        {/* Certifique-se de que o texto do link seja o email também */}
                        <a href="mailto:Nilsonbarbosa@hotmail.com">Nilsonbarbosa@hotmail.com</a>
                    </p>
                    <p>
                        <strong>Telefone / WhatsApp: Pastor Nilson</strong><br />
                        <a href="tel:+5582981201873">(82) 9-8120-1873</a>
                    </p>
                    <p>
                        <strong>Telefone / WhatsApp: Missionária Leila</strong><br />
                        <a href="tel:+5582999993756">(82) 9-9999-3756</a>
                    </p>
                    {/* Adicione redes sociais aqui se desejar */}
                </div>

                <div className="contact-map">
                    {/* AQUI ESTÁ A CORREÇÃO! */}
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.2132344807337!2d-35.7748011!3d-9.576879199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701485740a9e85d%3A0xee81d002c9489c62!2sIgreja%20Assembleia%20de%20Deus%20Madureira%20-%20R.%20Jos%C3%A9%20L%C3%B4bo%20de%20Medeiros%2C%20287%20-%20Tabuleiro%20do%20Martins%2C%20Macei%C3%B3%20-%20AL%2C%2057061-100!5e0!3m2!1spt-BR!2sbr!4v1758617008979!5m2!1spt-BR!2sbr" 
                      width="600" 
                      height="450" 
                      style={{ border: 0 }} /* <<-- MUDANÇA AQUI */
                      allowFullScreen=""     /* <<-- MUDANÇA AQUI */
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Contato;