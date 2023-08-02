'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { ContactProvider } from '@/state/ContactProvider';
import { MapProvider } from '@/state/MapProvider';

type Props = {
    children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
    return (
        <SessionProvider>
            <MapProvider>
                <ContactProvider>{children}</ContactProvider>
            </MapProvider>
        </SessionProvider>
    );
};

export default Providers;
