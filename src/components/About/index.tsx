import React from 'react';
import {
  AboutContainer,
  AboutContainerTitle,
  AboutFlexContainer,
  AboutTextFirstContainer,
  AboutTextSecondContainer,
  AboutTextContainerTitle,
  AboutTextContainerSubtitle,
  AboutImageContainer,
} from './style';
import homeTourImage from '../../assets/images/home-producttour.png';
import homeTourFocusedImage from '../../assets/images/home-producttour-focused.png';
import homeTourSincronizedImage from '../../assets/images/home-producttour-focused.png';

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutContainerTitle>Armazenamento e compartilhamento de arquivos são só o começo</AboutContainerTitle>
      <AboutFlexContainer>
        <AboutTextFirstContainer>
          <AboutTextContainerTitle>Mantenha-se organizado</AboutTextContainerTitle>
          <AboutTextContainerSubtitle>Reúna em um só lugar arquivos tradicionais, conteúdo em nuvem, documentos do Dropbox Paper e atalhos da Web — e trabalhe da forma que funciona para você.</AboutTextContainerSubtitle>
        </AboutTextFirstContainer>
        <AboutImageContainer>
          <img src={homeTourSincronizedImage} alt="Mantenha-se organizado" />
        </AboutImageContainer>
      </AboutFlexContainer>

      <AboutFlexContainer>
        <AboutTextSecondContainer>
          <AboutTextContainerTitle>Mantenha o foco</AboutTextContainerTitle>
          <AboutTextContainerSubtitle>As sugestões personalizadas exibem arquivos e pastas quando você precisa, para você perder menos tempo com buscas.</AboutTextContainerSubtitle>
        </AboutTextSecondContainer>
        <AboutImageContainer>
          <img src={homeTourFocusedImage} alt="Mantenha o foco" />
        </AboutImageContainer>
      </AboutFlexContainer>

      <AboutFlexContainer>
        <AboutTextSecondContainer>
          <AboutTextContainerTitle>Permaneça em sincronia</AboutTextContainerTitle>
          <AboutTextContainerSubtitle>Coordene tudo com a equipe e mantenha seus projetos em andamento com as ferramentas que você usa todos os dias, tudo dentro do Dropbox.</AboutTextContainerSubtitle>
        </AboutTextSecondContainer>
        <AboutImageContainer>
          <img src={homeTourFocusedImage} alt="Permaneça em sincronia" />
        </AboutImageContainer>
      </AboutFlexContainer>
    </AboutContainer>
  );
}

export default About;