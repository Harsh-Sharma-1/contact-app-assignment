'use client';
import React from 'react';

type Props = {
    label: string;
    onChange: (value: string) => void;
    value: string;
};

const InputBox = ({ label, onChange, value }: Props) => {
    return (
        <div className='w-full flex flex-col'>
            <label htmlFor=''>{label}</label>
            <input
                className='p-2 focus:outline-none bg-slate-200 rounded'
                type='text'
                onChange={(e) => onChange(e.target.value)}
                value={value}
                required
            />
        </div>
    );
};

export default InputBox;
