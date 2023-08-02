'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { BiSolidUser } from 'react-icons/bi';
import { signIn } from 'next-auth/react';

type Props = {
    children: React.ReactNode;
};

type Route = {
    path: string;
    label: string;
};

const MenuItem = ({ path, label }: Route) => {
    const pathname = usePathname();
    const router = useRouter();
    const active = pathname.includes(path);
    console.log(pathname);

    const onClick = () => {
        router.push(path);
    };

    return (
        <button
            className={twMerge(
                'w-full p-2 font-semibold rounded text-left',
                active ? 'bg-blue-200 text-black' : 'bg-transparent text-white'
            )}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

const Sidebar = ({ children }: Props) => {
    const pathname = usePathname();
    const routes: Route[] = [
        {
            label: 'contact',
            path: '/contact',
        },
        {
            label: 'dashboard',
            path: '/dashboard',
        },
    ];

    if (pathname === '/login') {
        return <div>{children}</div>;
    }
    return (
        <div className='flex'>
            <div className='w-[320px] h-screen hidden md:flex flex-col bg-black justify-between'>
                <div className='px-3 py-5'>
                    <div>
                        <h2 className='text-white font-bold text-2xl'>
                            Contact <span className='font-thin'>App</span>
                        </h2>
                    </div>
                    <div className='mt-5 flex flex-col gap-3'>
                        {routes.map((item, i) => (
                            <MenuItem key={i} {...item} />
                        ))}
                    </div>
                </div>
                <div className='px-3 py-5 flex justify-between'>
                    <div className='flex gap-1 text-white items-center justify-center'>
                        <BiSolidUser size={25} />
                        <h1 className='text-xl'>Harsh</h1>
                    </div>
                    <button
                        onClick={() => {
                            signIn();
                        }}
                        className='border border-white text-white p-2 bg-transparent transition hover:text-black hover:bg-white'
                    >
                        Logout
                    </button>
                </div>
            </div>
            <div className='p-4 h-screen overflow-y-auto w-full'>
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
