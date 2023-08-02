'use client';
import Header from '@/components/Header';
import InputBox from '@/components/dashboard/InputBox';
import useAuth from '@/hooks/useAuth';
import { useContactDispatch, useContactSelector } from '@/state/contact/hooks';
import { editContact } from '@/state/contact/slice';
import { useRouter } from 'next/navigation';
import React, { FormEventHandler, useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

type Props = {
    params: { userId: string };
};

const EditContact = ({ params }: Props) => {
    useAuth();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const router = useRouter();
    const { contacts } = useContactSelector((state) => state.contact);
    const dispatch = useContactDispatch();

    useEffect(() => {
        const contact = contacts.find((item) => item.id === params.userId);
        if (contact) {
            setFirstName(contact.firstName);
            setLastName(contact.lastName);
            setPhone(contact.phone);
            setStatus(contact.status);
        } else {
            router.back();
        }
    }, []);

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(firstName, lastName);
        dispatch(
            editContact({
                id: params.userId,
                contact: {
                    firstName: firstName,
                    lastName: lastName,
                    phone: phone,
                    status: status,
                    id: uuid(),
                },
            })
        );
        router.push('/contact');
    };

    return (
        <div className='w-full'>
            <Header label='Edit Contact' />
            <form
                className='w-full m-auto mt-5 gap-3 max-w-xl flex flex-col items-center justify-center'
                onSubmit={submit}
            >
                <InputBox
                    label='First Name'
                    onChange={(data) => {
                        setFirstName(data);
                    }}
                    value={firstName}
                />
                <InputBox
                    label='Last Name'
                    onChange={(data) => {
                        setLastName(data);
                    }}
                    value={lastName}
                />
                <InputBox
                    label='Phone'
                    onChange={(data) => {
                        setPhone(data);
                    }}
                    value={phone}
                />
                <div className='w-full flex flex-col'>
                    <label htmlFor=''> status</label>
                    <select
                        className='p-2 py-3 focus:outline-none bg-slate-200 rounded'
                        value={status}
                        onChange={(e) => {
                            setStatus(e.target.value);
                        }}
                    >
                        <option value={'inactive'}>inactive</option>
                        <option value={'active'}>active</option>
                    </select>
                </div>
                <button type='submit' className='p-2 mt-2 bg-black text-white'>
                    edit contact
                </button>
            </form>
        </div>
    );
};

export default EditContact;
