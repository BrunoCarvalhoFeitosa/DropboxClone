import styled from 'styled-components';

export const AboutContainer = styled.section `
  width: 100%;
  padding: 80px 120px;
  background: var(--color-primary);

  @media screen and (max-width: 680px) {
    padding: 80px 20px;  
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 80px 50px;  
  }
`;

export const AboutContainerTitle = styled.h3 `
  font-size: 40px;
  line-height: 44px;
  color: var(--color-secondary);
  max-width: 530px;

  @media screen and (max-width: 680px) {
    font-size: 32px;
    max-width: unset;
  }
`;

export const AboutFlexContainer = styled.div `
  display: flex;
  margin-top: 40px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const AboutTextFirstContainer = styled.div `

  @media screen and (max-width: 680px) {
    margin-top: 42px;
    margin-bottom: 15px;    
  }
`;

export const AboutTextSecondContainer = styled.div `
  margin-top: 58px;
`;

export const AboutTextContainerTitle = styled.h5 `
  margin-bottom: 20px;
  max-width: 160px;
  font-size: 26px;
  color: var(--color-tertiary);

  @media screen and (max-width: 1024px) {
    max-width: unset;    
  }
`;

export const AboutTextContainerSubtitle = styled.p `
  font-size: 17px;
  color: var(--color-tertiary);
`;

export const AboutImageContainer = styled.div `
  > img {
    display: block;
    transition: transform .75s;
    cursor: pointer;
    &:hover {
      transform: translateY(-40px);

      @media screen and (max-width: 1024px) {
        transform: none;
      }
    }

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
`;
