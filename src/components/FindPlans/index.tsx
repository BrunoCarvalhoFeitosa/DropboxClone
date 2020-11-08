import React from 'react';
import {
  FindPlansContainer,
  FindPlansTitle,
  FindPlansOffer,
  FindPlansOfferColumn,
  FindPlansOfferColumnTitle,
  FindPlansOfferColumnButton,
} from './style';

const FindPlans: React.FC = () => {
  return (
    <FindPlansContainer>
      <FindPlansTitle>Encontre o plano do Dropbox perfeito para você</FindPlansTitle>
      <FindPlansOffer>
        <FindPlansOfferColumn>
          <FindPlansOfferColumnTitle>Para freelancers e pessoas físicas</FindPlansOfferColumnTitle>
          <FindPlansOfferColumnButton>Obter o Dropbox</FindPlansOfferColumnButton>
        </FindPlansOfferColumn>
        <FindPlansOfferColumn>
          <FindPlansOfferColumnTitle>Para empresas e equipes de qualquer tamanho</FindPlansOfferColumnTitle>
          <FindPlansOfferColumnButton>Obter o Dropbox Business</FindPlansOfferColumnButton>
        </FindPlansOfferColumn>
      </FindPlansOffer>
    </FindPlansContainer>
  );
};

export default FindPlans;