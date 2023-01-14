import React from 'react';
import { ContainerAside, Header, LogoImg, MenuContainer, MenuItemLink, Title } from './AsideCSS';

import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
  return (
    <ContainerAside>
      <Header>
        <LogoImg src={logoImg} alt="Minha" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="">
          <MdArrowDownward />
          Saidas
        </MenuItemLink>
        <MenuItemLink href="">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </ContainerAside>
  );
}

export default Aside;