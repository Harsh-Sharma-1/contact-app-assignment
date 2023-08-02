'use client';
import Header from '@/components/Header';
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import DashboardCard from '@/components/dashboard/DashboardCard';
import LineChart from '@/components/dashboard/LineChart';
import MapChart from '@/components/dashboard/MapChart';
import useAuth from '@/hooks/useAuth';
import { getAllStats } from '@/services/covidDataService';

type Props = {};

const Dashboard = (props: Props) => {
    useAuth();
    const { isLoading, error, data } = useQuery({
        queryKey: ['statsData'],
        queryFn: getAllStats,
    });

    if (isLoading) return 'Loading...';
    console.log(data);
    return (
        <div>
            <Header label='Covid Dashboard' />
            <div className='flex flex-auto flex-wrap items-center justify-center gap-2'>
                <DashboardCard label='cases' value={data['cases']} />
                <DashboardCard label='active' value={data['active']} />
                <DashboardCard label='critical' value={data['critical']} />
                <DashboardCard label='deaths' value={data['active']} />
                <DashboardCard label='recovered' value={data['recovered']} />
            </div>
            <div className='bg-black w-full flex items-center p-2 mt-2 mb-1 justify-center'>
                <p className='text-white'>Cases fluctuations</p>
            </div>
            <LineChart />

            <div className='bg-black w-full flex items-center p-2 mt-4 mb-1 justify-center'>
                <p className='text-white'>Data by Countries</p>
            </div>
            <div className='w-full h-[500px]'>
                <MapChart />
            </div>
        </div>
    );
};

export default Dashboard;
