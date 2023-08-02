'use client';
import Header from '@/components/Header';
import useAuth from '@/hooks/useAuth';
import { useContactDispatch, useContactSelector } from '@/state/contact/hooks';
import { deleteContact } from '@/state/contact/slice';
import { Contact } from '@/types/contact';
import { useRouter } from 'next/navigation';
import React, { FormEventHandler, useEffect, useRef, useState } from 'react';

type Props = {
    params: {
        userId: string;
    };
};

const DeleteContact = ({ params }: Props) => {
    useAuth();
    const [contact, setContact] = useState<Contact>();
    const { contacts } = useContactSelector((state) => state.contact);
    const dispatch = useContactDispatch();
    const router = useRouter();

    useEffect(() => {
        const contact = contacts.find((item) => item.id === params.userId);
        if (contact) {
            setContact(contact);
        } else {
            router.back();
        }
    }, []);

    return (
        <div className='w-full'>
            <Header label='Delete Contact' />

            <h1 className='text-center text-xl m-4 mt-6'>
                Are you sure you want to delete this contact
            </h1>

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
                        </tbody>
                    </table>
                    <div className='max-w-sm flex m-auto mt-4 gap-3'>
                        <button
                            onClick={() => {
                                router.push('/contact');
                            }}
                            className='w-full border border-black rounded'
                        >
                            Cancel
                        </button>
                        <button
                            onClick={(e) => {
                                dispatch(deleteContact(params.userId));
                                router.push('/contact');
                            }}
                            className='w-full bg-red-400 text-white p-2 hover:bg-red-500 transition rounded'
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeleteContact;
