import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 480px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  min-height: 61px;
  > h1 {
    display: flex;
    align-items: center;
    > span {
      margin-left: 10px;
      color: var(--color-quaternary);
      font-size: 29px;
    }
  }
  > button {
    outline: 0;
    background: none;
    border: none;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--color-blue);
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 480px;
  height: 100%;
  padding: 0 32px;
  > .title {
    font-size: 25px;
    font-weight: bold;
  }
  > .subtitle {
    font-size: 12px;
    margin-top: 3px;
  }

  > input {
    outline: none;
    background: var(--color-tertiary);
    border: 1px solid var(--color-border);
    padding: 13px 18px;
    font-size: 14px;
    margin-top: 18px;
  }

  .remember {
    margin-top: 14px;
    display: flex;
    align-items: center;
    > input {
      margin-right: 6px;
      appearence: none;
      -webkit-appearance: none;
      -moz-appearence: none;
      outline: none;
      width: 16px;
      height: 16px;
      border: 1px solid var(--color-border);
      cursor: pointer;
      &:checked {
        background: var(--color-blue);
        border: var(--color-tertiary);
      }
    }
    > label {
      font-size: 12px;
    }
  }

  a {
    margin-top: 10px;
    font-size: 12px;
    color: var(--color-blue);
    text-decoration: underline;
    cursor: pointer;
  }

  > button {
    margin-top: 18px;
    padding: 13px 18px;
    background: var(--color-blue);
    border: none;
    font-size: 16px;
    color: var(--color-tertiary);
    transition: 0.47s opacity;
    cursor: pointer;
    &:hover {
      opacity: 0.88
    }
  }

  .terms {
    position: relative;
    top: 26px;
    font-size: 11px;
    text-align: center;
  }
`;