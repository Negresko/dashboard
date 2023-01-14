import React from 'react';
import { ToggleContainer, ToggleLabel, ToggleSelector } from './ToggleCSS';

const Toggle: React.FC = () => {
  return (
    <ToggleContainer>
        <ToggleLabel>Claro</ToggleLabel>
          <ToggleSelector checked checkedIcon={false} uncheckedIcon={false} onChange={() => console.log("Mudou!")} />
        <ToggleLabel>Escuro</ToggleLabel>
    </ToggleContainer>
  );
}

export default Toggle;