import React from 'react';
import SelectInput from '../SelectInput/SelectInput';
import { ContainerContentHeader, TitleContainer, Controllers } from './ContentHeaderCSS';

interface IContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({title, lineColor, children}) => {

    return (
        <ContainerContentHeader>
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </ContainerContentHeader>
    );
}

export default ContentHeader;