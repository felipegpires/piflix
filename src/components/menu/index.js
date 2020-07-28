import React from  'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper } from './style.js';
import Button from '../Button';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage className="Logo" src={Logo} alt="Piflix Logo"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;