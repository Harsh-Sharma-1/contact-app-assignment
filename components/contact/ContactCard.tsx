import React from 'react';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { Contact } from '@/types/contact';

type Props = {
    contact: Contact;
};

const ContactCard = ({ contact }: Props) => {
    const router = useRouter();
    return (
        <div
            className='p-2 min-w-[200px] shadow-md rounded cursor-pointer'
            onClick={() => {
                router.push('/contact/' + contact.id);
            }}
        >
            <div className='flex items-center justify-center p-3 border mb-2 border-black'>
                <BiSolidUserRectangle size={180} />
            </div>
            <h1 className='mb-2 text-lg font-bold'>
                {contact.firstName + ' ' + contact.lastName}{' '}
            </h1>
            <div className='flex gap-2 w-full'>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        router.push('/contact/edit/' + contact.id);
                    }}
                    className='w-full bg-green-400 text-white p-2 hover:bg-green-500 transition rounded'
                >
                    Edit
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        router.push('/contact/delete/' + contact.id);
                    }}
                    className='w-full bg-red-400 text-white p-2 hover:bg-red-500 transition rounded'
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ContactCard;
