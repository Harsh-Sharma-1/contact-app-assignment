'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { MapProvider } from '@/state/MapProvider';
import { store } from '@/state/contact/store';
import { Provider } from 'react-redux';

type Props = {
    children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
    return (
        <SessionProvider>
            <MapProvider>
                <Provider store={store}>{children}</Provider>
            </MapProvider>
        </SessionProvider>
    );
};

export default Providers;
