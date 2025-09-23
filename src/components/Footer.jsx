// src/components/Footer.jsx
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear(); // Pega o ano atual automaticamente
    return (
        <footer className="site-footer">
            <p>&copy; {currentYear} AD Brás Piracicaba Tabuleiro - Reg. 17. Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;