import React from 'react';

import {Link} from 'react-router-dom';

import { ContainerAside, Header, LogoImg, MenuContainer, Title } from './AsideCSS';

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
        <Link to="/dashboard">
          <MdDashboard />
          Dashboard
        </Link>
        <Link to="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </Link>
        <Link to="/list/exit-balance">
          <MdArrowDownward />
          Saidas
        </Link>
        <Link to="">
          <MdExitToApp />
          Sair
        </Link>
      </MenuContainer>
    </ContainerAside>
  );
}

export default Aside;