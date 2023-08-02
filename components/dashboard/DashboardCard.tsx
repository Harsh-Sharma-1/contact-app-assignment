import React from 'react';

type Props = {
    label: string;
    value: number;
};

const DashboardCard = ({ label, value }: Props) => {
    return (
        <div className='w-fit p-4 shadow-sm rounded-sm flex flex-col items-center justify-center'>
            <p className='text-lg font-medium'>{label}</p>
            <hr />
            <h3 className='text-2xl text-blue-500'>{value}</h3>
        </div>
    );
};

export default DashboardCard;
