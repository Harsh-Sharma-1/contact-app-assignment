'use client';
import useAuth from '@/hooks/useAuth';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const Home = () => {
    const session = useSession();
    const router = useRouter();
    useEffect(() => {
        if (session.data) {
            router.push('/contact');
        }
    }, [session.data, router]);

    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold italic'>
                Welcome in contact app
            </h1>
            <p className='mt-2'>Please login to continue</p>
            <button
                onClick={() => {
                    signIn();
                }}
                className='border px-4 bg-black text-white p-2 mt-2'
            >
                LogIn to continue
            </button>
        </div>
    );
};

export default Home;
