import React, {ReactNode} from 'react';

type Row = {
    htmlFor: string,
    label: string,
    children: ReactNode
};

function Row({htmlFor, label, children}: Row) {
    return (
        <div className="flex items-center gap-2 ">
            <label className="text-base leading-normal tracking-wider font-bold whitespace-nowrap min-w-32" htmlFor={htmlFor}>{label}</label>
            {children}
        </div>
    );
}

export default Row;