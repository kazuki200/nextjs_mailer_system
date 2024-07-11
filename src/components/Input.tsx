import {ChangeEvent} from "react";

type Props = {
    id: string,
    name: string,
    placeholder: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,

};

const Input = ({id, name, placeholder, value, onChange}: Props) => {
    return <input onChange={onChange} className="bg-gray-400/20 border-black rounded-md px-4 py-1 w-full h-12"
                  type="text" value={value}
                  placeholder={placeholder} id={id} name={name}/>;
};

export default Input;
