import React from 'react';

type Contact = {
    firstName: string;
    lastName: string;
    phone: string;
};

type Props = {
    contact: Contact;
};

const ContactCard = ({ contact }: any) => {
    return (
        <div className='p-2 min-w-[200px] shadow-md rounded'>
            <div className='flex items-center justify-center p-3 bg-black'>
                <p className='text-white text-5xl'>{contact.firstName[0]}</p>
            </div>
            <h1>{contact.firstName}</h1>
            <p>{contact.phone}</p>
        </div>
    );
};

export default ContactCard;
