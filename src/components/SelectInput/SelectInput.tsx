import React, {SelectHTMLAttributes} from 'react'
import { ContainerSelectInput } from './SelectInputCSS';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{

}

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
}

const SelectInput: React.FC<ISelectInputProps> = ({options}) => {


    return (
        <ContainerSelectInput>
            <select>
                {
                    options.map(option => (
                        <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </ContainerSelectInput>
    );
}

export default SelectInput;