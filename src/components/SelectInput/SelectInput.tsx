import React, { SelectHTMLAttributes } from 'react'
import { ContainerSelectInput } from './SelectInputCSS';

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {


    return (
        <ContainerSelectInput>
            <select {...options}>
                {
                    options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </ContainerSelectInput>
    );
}

export default SelectInput;