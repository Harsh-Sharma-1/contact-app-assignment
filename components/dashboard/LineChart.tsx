'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, TimeScale } from 'chart.js/auto';
import 'chartjs-adapter-moment';
import { useQuery } from '@tanstack/react-query';

Chart.register(TimeScale);

const LineChart = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['casesData'],
        queryFn: () =>
            fetch(
                'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
            ).then((res) => res.json()),
    });

    console.log(data?.cases);

    if (isLoading) return 'Loading...';

    const chartdata = {
        labels: Object.keys(data?.cases),
        datasets: [
            {
                label: 'Cases',
                data: Object.values(data?.cases),
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return (
        <div className='w-full'>
            <Line
                data={chartdata}
                options={{
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'month',
                            },
                            ticks: {
                                source: 'labels',
                            },
                        },
                        y: {
                            beginAtZero: true,
                        },
                    },
                }}
            />
        </div>
    );
};

export default LineChart;
