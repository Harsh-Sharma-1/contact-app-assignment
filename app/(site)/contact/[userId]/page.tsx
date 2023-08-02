'use client';
import Header from '@/components/Header';
import useAuth from '@/hooks/useAuth';
import { useContactSelector } from '@/state/contact/hooks';
import { Contact } from '@/types/contact';
import { useRouter } from 'next/navigation';
import React, { FormEventHandler, useEffect, useRef, useState } from 'react';

type Props = {
    params: {
        userId: string;
    };
};

const ContactInfo = ({ params }: Props) => {
    useAuth();
    const [contact, setContact] = useState<Contact>();
    const { contacts } = useContactSelector((state) => state.contact);
    const router = useRouter();

    useEffect(() => {
        const contact = contacts.find((item) => item.id === params.userId);
        if (contact) {
            setContact(contact);
        } else {
            router.back();
        }
    }, [params.userId]);

    return (
        <div className='w-full'>
            <Header label='User Info' />

            {contact && (
                <div className='relative overflow-x-auto mt-5'>
                    <table className='w-full m-auto max-w-xl text-sm text-left text-gray-500 dark:text-gray-400'>
                        <tbody>
                            <tr className='bg-slate-300 text-black'>
                                <th
                                    scope='row'
                                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                                >
                                    First name
                                </th>
                                <td className='px-6 py-4'>
                                    {contact.firstName}
                                </td>
                            </tr>

                            <tr className='bg-slate-300 text-black'>
                                <th
                                    scope='row'
                                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                                >
                                    Last name
                                </th>
                                <td className='px-6 py-4'>
                                    {contact.lastName}
                                </td>
                            </tr>

                            <tr className='bg-slate-300 text-black'>
                                <th
                                    scope='row'
                                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                                >
                                    Phone
                                </th>
                                <td className='px-6 py-4'>{contact.phone}</td>
                            </tr>

                            <tr className='bg-slate-300 text-black'>
                                <th
                                    scope='row'
                                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                                >
                                    Status
                                </th>
                                <td className='px-6 py-4'>{contact.status}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ContactInfo;
