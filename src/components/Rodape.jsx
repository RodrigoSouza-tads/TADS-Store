function Rodape(){
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* LOGO / SOBRE */}
                <div className="footer-bloco">
                    <h3 className="footer-logo">
                        TADS Store
                    </h3>

                    <p className="footer-texto">
                        Sua loja online de tecnologia, eletrônicos e produtos selecionados com os melhores preços.
                    </p>
                </div>

                {/* INSTITUCIONAL */}
                <div className="footer-bloco">
                    <h4 className="footer-titulo">
                        Institucional
                    </h4>

                    <a href="#" className="footer-link">Sobre nós</a>
                    <a href="#" className="footer-link">Trabalhe conosco</a>
                    <a href="#" className="footer-link">Política de privacidade</a>
                    <a href="#" className="footer-link">Termos de uso</a>
                </div>

                {/* CONTATO */}
                <div className="footer-bloco">
                    <h4 className="footer-titulo">
                        Contato
                    </h4>

                    <p className="footer-texto">
                        Email: suporte@tadsstore.com
                    </p>

                    <p className="footer-texto">
                        WhatsApp: (11) 99999-9999
                    </p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} TADS Store. Todos os direitos reservados.
                </p>
            </div>

        </footer>
    );
}

export default Rodape;