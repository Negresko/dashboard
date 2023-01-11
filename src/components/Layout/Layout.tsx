import React from 'react';

import { ContainerLayout } from './LayoutCSS';

import MainHeader from '../MainHeader/MainHeader';
import Aside from '../Aside/Aside';
import Content from '../Content/Content';

const Layout: React.FC = () => {
  return (
    <ContainerLayout>
      <MainHeader />
      <Aside />
      <Content />
    </ContainerLayout>
  );
}

export default Layout;