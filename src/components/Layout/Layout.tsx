import React from 'react';

import { ContainerLayout } from './LayoutCSS';

import MainHeader from '../MainHeader/MainHeader';
import Aside from '../Aside/Aside';
import Content, { ChildrenProps } from '../Content/Content';

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <ContainerLayout>
      <MainHeader />
      <Aside />
      <Content>
        {children}
      </Content>
    </ContainerLayout>
  );
}

export default Layout;