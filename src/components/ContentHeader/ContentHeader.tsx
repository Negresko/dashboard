import React from 'react';
import SelectInput from '../SelectInput/SelectInput';
import { ContainerContentHeader, TitleContainer, Controllers } from './ContentHeaderCSS';


const ContentHeader: React.FC = () => {

    const options = [
        { value: 'Cláudio', label: 'Cláudio' }
    ];

    return (
        <ContainerContentHeader>
            <TitleContainer>
                <h1>teste</h1>
            </TitleContainer>
            <Controllers>
                <SelectInput options={options} />
            </Controllers>
        </ContainerContentHeader>
    );
}

export default ContentHeader;