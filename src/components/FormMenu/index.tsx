import React from 'react';
import {
  Container,
  Navigation,
  DropboxLogo,
  Form
} from './style';

const FormMenu: React.FC = () => {
  function handleToggle() {
    if(window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>
        <button className="action--close" onClick={handleToggle}>✕</button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">Preencha o formulário abaixo.</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <a>Esqueceu a senha?</a>

        <button>Prosseguir</button>

        <span className="terms">Para prosseguir acesse nossa Política de Privacidade e aceite os Termos.</span>
      </Form>
    </Container>
  );
};

export default FormMenu;