import React from 'react';
import { Container, HeaderWrapper, Header, DropboxLogo, Content, ContentWrapper } from './style';
import imageHero from '../../assets/images/image-hero.jpg';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black' | 'transparent';
  title: string;
  description: string;
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
  const buttonVariant = Math.round(Math.random());

  function handleToggle() {
    if(window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container className={variant}>
      <HeaderWrapper>
      <Header>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>
        <button onClick={handleToggle}>{buttonVariant === 0 ? 'Acessar' : 'Interagir'}</button>
      </Header>
    </HeaderWrapper>

      <Content>
        <ContentWrapper>
          <img src={imageHero} alt="Uma escrivaninha ou espaço de trabalho com pastas tradicionais para arquivamento e outros acessórios de escritório." />
          <h2>{title}</h2>
        </ContentWrapper>
        <p>{description}</p>
      </Content>
    </Container>    
  );
};

export default Section;