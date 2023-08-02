'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { useQuery } from '@tanstack/react-query';

type Props = {};

const MapChart = (props: Props) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['countriesData'],
        queryFn: () =>
            fetch('https://disease.sh/v3/covid-19/countries').then((res) =>
                res.json()
            ),
    });

    if (isLoading) return 'Loading...';
    console.log(data);

    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={2}
            scrollWheelZoom={false}
            style={{
                height: '500px',
                width: '100%',
            }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {data.map((item, i) => (
                <Marker
                    key={i}
                    position={[item.countryInfo.lat, item.countryInfo.long]}
                >
                    <Popup>
                        <h1>{item.country}</h1>
                        <p>
                            <b>Active : </b> {item.active}
                        </p>
                        <p>
                            <b className='text-green-500'>Recovered : </b>{' '}
                            {item.recovered}
                        </p>
                        <p>
                            <b className='text-red-500'>Deaths : </b>{' '}
                            {item.deaths}
                        </p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapChart;
