import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';
import { getCountriesData } from '@/services/covidDataService';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

type Props = {};

const MapChart = (props: Props) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['countriesData'],
        queryFn: getCountriesData,
    });

    if (isLoading) return <div>Loading...</div>;
    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={3}
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
            {data &&
                data.map((item, i) => (
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
