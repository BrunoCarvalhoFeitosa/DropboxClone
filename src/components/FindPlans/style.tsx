import styled from 'styled-components';

export const FindPlansContainer = styled.section `
  width: 100%;
  padding: 80px 120px;
  background: var(--color-tertiary);

  @media screen and (max-width: 680px) {
    padding: 80px 20px;    
  }
`;

export const FindPlansTitle = styled.h3 `
  font-size: 32px;
  max-width: 640px;
`;

export const FindPlansOffer = styled.div `
  margin: 50px 0 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FindPlansOfferColumn = styled.div `
  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;    
  }
`;

export const FindPlansOfferColumnTitle = styled.h4 `
  font-size: 40px;
  line-height: 44px;

  @media screen and (max-width: 1024px) {
    font-size: 25px;
    line-height: 29px;
  }
`;

export const FindPlansOfferColumnButton = styled.button `
  margin-top: 40px;
  border: none;
  outline: none;
  padding: 16px 36px;
  background: var(--color-cta);
  width: 270px;
  font-size: 16px;
  color: var(--color-tertiary);
  transition: background .5s;
  cursor: pointer;
  &:hover {
    background: var(--color-cta-secondary);
  }

  @media screen and (max-width: 680px) {
    width: 100%;    
  }
`;
