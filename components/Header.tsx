import React from 'react';

type Props = {
    label: string;
};

const Header = ({ label }: Props) => {
    return (
        <h3 className='text-center w-full p-2 font-bold text-xl border border-transparent border-b-black'>
            {label}
        </h3>
    );
};

export default Header;
