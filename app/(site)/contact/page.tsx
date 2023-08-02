'use client';
import Header from '@/components/Header';
import ContactCard from '@/components/contact/ContactCard';
import InputBox from '@/components/dashboard/InputBox';
import useAuth from '@/hooks/useAuth';
import { useContactSelector } from '@/state/contact/hooks';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
    useAuth();
    const { contacts } = useContactSelector((state) => state.contact);
    const [search, setSearch] = useState('');

    return (
        <div className='w-full'>
            <Header label='Your Contacts' />
            {contacts.length > 0 && (
                <div className='border border-transparent border-b-black mb-4 p-4 flex justify-between'>
                    <input
                        className='p-2 focus:outline-none bg-slate-200 rounded'
                        placeholder='search by firstname'
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <Link
                        href={'/contact/create'}
                        className='bg-black text-white px-3 py-2'
                    >
                        Create Contact
                    </Link>
                </div>
            )}
            <div className='w-full flex flex-auto flex-wrap gap-3 mt-10'>
                {contacts.length < 1 ? (
                    <div className='min-h-[500px] m-auto flex flex-col items-center justify-center gap-3'>
                        <h1 className='text-lg'>
                            No Contact found please add contacts from create
                            contact button
                        </h1>
                        <Link
                            href={'/contact/create'}
                            className='bg-black text-white px-3 py-2'
                        >
                            Create Contact
                        </Link>
                    </div>
                ) : search.trim().length === 0 ? (
                    contacts.map((item, i) => {
                        return <ContactCard key={i} contact={item} />;
                    })
                ) : (
                    contacts
                        .filter((item) => item.firstName.toLowerCase().includes(search.toLowerCase()))
                        .map((item, i) => {
                            return <ContactCard key={i} contact={item} />;
                        })
                )}
            </div>
        </div>
    );
}
