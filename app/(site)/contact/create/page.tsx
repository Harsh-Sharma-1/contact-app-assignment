'use client';
import Header from '@/components/Header';
import InputBox from '@/components/dashboard/InputBox';
import { useContactContext } from '@/state/ContactProvider';
import { useRouter } from 'next/navigation';
import React, { FormEventHandler, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

type Props = {};

const CreateContact = (props: Props) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const status = useRef<HTMLInputElement>();
    const router = useRouter();
    const { addContact } = useContactContext();

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        addContact({
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            status: status.current?.value as string,
            id: uuid(),
        });
        router.push('/contact');
    };
    return (
        <div className='w-full'>
            <Header label='Create Contact' />
            <form
                className='w-full m-auto mt-5 gap-3 max-w-xl flex flex-col items-center justify-center'
                onSubmit={submit}
            >
                <InputBox
                    label='First Name'
                    onChange={(data) => {
                        setFirstName(data);
                    }}
                />
                <InputBox
                    label='Last Name'
                    onChange={(data) => {
                        setLastName(data);
                    }}
                />
                <InputBox
                    label='Phone'
                    onChange={(data) => {
                        setPhone(data);
                    }}
                />
                <div className='w-full flex flex-col'>
                    <label htmlFor=''> status</label>
                    <select
                        className='p-2 py-3 focus:outline-none bg-slate-200 rounded'
                        ref={status as any}
                    >
                        <option value={0}>inactive</option>
                        <option value={1}>active</option>
                    </select>
                </div>
                <button type='submit' className='p-2 mt-2 bg-black text-white'>
                    create contact
                </button>
            </form>
        </div>
    );
};

export default CreateContact;
