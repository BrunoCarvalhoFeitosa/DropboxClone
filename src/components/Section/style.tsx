import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;
  background: var(--bg-color);
  position: relative;
  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }
  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
    img {
      display: block;
      max-width: 720px;
      width: 64%;
      transform: translateY(-60px);

      @media screen and (max-width: 680px) {
        width: 100%;
      }
    }
  }
  &.white {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-blue);
  }
  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }
  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;

    @media (min-width: 1024px) {
      --heading-font-size: 71px;
      --content-width: 50%;
    }
  }
  &:nth-child(2) {
    --padding-top: 0px;
    --heading-font-size: 31px;
    --content-width: 50%;
    h2 {
      max-width: 318px;
      margin: 0 auto;
      &::after {
        margin-top: 10px;
        content: 'A maioria das “ferramentas de produtividade” interfere em seu fluxo de trabalho e atrapalha-o constantemente. Há uma forma mais moderna de trabalhar. O Dropbox ajuda as pessoas a se organizarem, a manterem o foco e a permanecerem sincronizadas com suas equipes.';
        display: block;
        font-size: 17px;
        font-weight: 300;
        color: var(--color-quaternary);
      }
    }
  }
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg-color);
  clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  background: var(--bg-color);
  padding: 16px 32px;
  z-index: 3;
  > h1 {
    display: flex;
    align-items: center;
    cursor: pointer;
    > span {
      color: var(--text-color);
      margin-left: 10px;
      font-size: 29px;
    }
  }
  > button {
    color: var(--text-color);
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    z-index: 99999;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--logo-color);
`;

export const Content = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  z-index: 2;
  > p {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 300;
    color: var(--text-color);
    max-width: var(--content-width);
  }
  padding: var(--padding-top) 54px var(--padding-bottom);
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--content-width);

    @media screen and (max-width: 680px) {
      font-size: 32px;
    }
  }

  @media screen and (max-width: 680px) {
    flex-direction: column; 
  }
`;