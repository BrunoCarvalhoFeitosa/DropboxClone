import styled from 'styled-components';

export const FooterContainer = styled.footer `
  padding: 80px 40px;
  width: 100%;
  background: var(--color-quaternary);
`;

export const FooterLinksContainer = styled.ul `
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FooterColumn = styled.div `
  list-style: none;
  &:not(:last-of-type) {
    margin-right: 115px;

    @media screen and (max-width: 1024px) {
      margin-right: 0;
      margin-bottom: 40px; 
    }
  }
`;

export const FooterTitle = styled.h3 `
  margin-bottom: 18px;
  font-size: 22px;
  color: var(--color-tertiary);

  @media screen and (max-width: 1024px) {
    text-align: center;    
  }
`;

export const FooterLink = styled.li `
  margin-bottom: 10px;
  font-size: 16px;
  color: var(--color-tertiary);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1024px) {  
    text-align: center;
  }
`;

export const FooterLanguage = styled.div `
  margin: 40px 60px 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    margin: 40px 0 0;
    justify-content: center;
  }
`;

export const FooterLanguageText = styled.p `
  margin-left: 5px;
  color: var(--color-tertiary);
`;
