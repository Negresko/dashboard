import React, { useMemo } from 'react';

import emojis from '../../utils/emojis';
import Toggle from '../Toggle/Toggle';


import { ContainerMainHeader, Profile, Welcome, UserName } from './MainHeaderCSS';

const MainHeader: React.FC = () => {

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <ContainerMainHeader>
      <Toggle />
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Usuário</UserName>
      </Profile>
    </ContainerMainHeader>
  );
}

export default MainHeader;