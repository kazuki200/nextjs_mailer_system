import React, {ChangeEvent} from 'react';

type Option = {
    label: string,
    value: string,
};

type Props = {
    id: string,
    name: string,
    options: Option[],
    value: string,
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
};

const Select = ({id, name, options, value, onChange}: Props) => {
    return (
        <select onChange={onChange} value={value} required={true}
                className="bg-gray-400/20 border-black rounded-md px-4 py-1 w-full h-12 valid:text-gray-400 whitespace-nowrap"
                name={name} id={id}>
            {options.map((optionData, index) => (
                <option key={index} value={optionData.value}>{optionData.label}</option>
            ))}
        </select>
    );
};

export default Select;
