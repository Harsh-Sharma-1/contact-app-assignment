'use client';
import Header from '@/components/Header';
import ContactCard from '@/components/contact/ContactCard';
import { useContactContext } from '@/state/ContactProvider';
import Link from 'next/link';
import { useState } from 'react';

interface contact {
    firstName: string;
    lastName: string;
    status: boolean;
    phone: string;
}

export default function Home() {
    const { getContacts } = useContactContext();
    const contacts = getContacts() as [];
    console.log(contacts);
    return (
        <div className='w-full'>
            <Header label='Your Contacts' />
            {contacts.length > 0 && (
                <>
                    <Link
                        href={'/contact/create'}
                        className='bg-black text-white px-3 py-2 mt-3 float-right'
                    >
                        Create Contact
                    </Link>
                    <hr />
                </>
            )}
            <div className='w-full flex flex-auto flex-wrap gap-3 mt-10'>
                {contacts.length < 1 ? (
                    <div className='min-h-[500px] flex flex-col items-center justify-center gap-3'>
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
                ) : (
                    contacts.map((item, i) => {
                        return <ContactCard key={i} contact={item} />;
                    })
                )}
            </div>
        </div>
    );
}
