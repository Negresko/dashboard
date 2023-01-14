import React from 'react';
import { ContainerContent } from './ContentCSS';

export interface ChildrenProps {
  children: React.ReactNode;
}

const Content: React.FC<ChildrenProps> = ({children}) => {
  return (
    <ContainerContent>
      { children }
    </ContainerContent>
  );
}

export default Content;