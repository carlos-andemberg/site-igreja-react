// src/components/Footer.jsx
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear(); // Pega o ano atual automaticamente
    return (
        <footer className="site-footer">
            <p>
                &copy; {currentYear} Igreja Assembleia de Deus Ministério de Madureira ADMP Regional 17
                <br className="mobile-only-break" />
                {' '} {/* Garante um espaço no desktop quando a quebra de linha está escondida */}
                Todos os direitos reservados.
            </p>
            <p>Desenvolvido por <a className="creator-design" target="_blank" href="https:\\carlosandemberg.com.br">Carlos Andemberg</a></p>
        </footer>
    );
}

export default Footer;