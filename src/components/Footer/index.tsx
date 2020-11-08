import React from 'react';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterColumn,
  FooterTitle,
  FooterLink,
  FooterLanguage,
  FooterLanguageText,
} from './style';
import { BiWorld } from 'react-icons/bi';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterColumn>
          <FooterTitle>Dropbox</FooterTitle>
          <FooterLink>App para desktop</FooterLink>
          <FooterLink>Apps para dispositivos móveis</FooterLink>
          <FooterLink>Planos</FooterLink>
          <FooterLink>Segurança</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Produtos</FooterTitle>
          <FooterLink>Plus</FooterLink>
          <FooterLink>Professional</FooterLink>
          <FooterLink>Business</FooterLink>
          <FooterLink>Enterprise</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Empresa</FooterTitle>
          <FooterLink>Quem somos</FooterLink>
          <FooterLink>Trabalhe conosco</FooterLink>
          <FooterLink>Imprensa</FooterLink>
          <FooterLink>Blog</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Atendimento</FooterTitle>
          <FooterLink>Central de ajuda</FooterLink>
          <FooterLink>Fale conosco</FooterLink>
          <FooterLink>Cookies</FooterLink>
          <FooterLink>Mapa do site</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Comunidade</FooterTitle>
          <FooterLink>Desenvolvedores</FooterLink>
          <FooterLink>Indicações</FooterLink>
          <FooterLink>Fórum</FooterLink>
        </FooterColumn>
      </FooterLinksContainer>
      <FooterLanguage>
        <BiWorld color="#FFF" size={22} />
        <FooterLanguageText>Português (Brasil)</FooterLanguageText>
      </FooterLanguage>
    </FooterContainer>
  );
}

export default Footer;