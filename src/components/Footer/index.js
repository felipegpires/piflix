import React from 'react';
import { FooterBase } from './styles';
import Rodape from '../../assets/img/rodape.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.facebook.com/felipe.gomespires" target="_blank" rel="noopener noreferrer">
        <img src={Rodape} alt="Felipe Gomes Pires"/>
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://www.facebook.com/felipe.gomespires" target="_blank" rel="noopener noreferrer">
          Felipe Gomes Pires
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
