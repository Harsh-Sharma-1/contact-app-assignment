'use client';
import { createContext, useContext, useState } from 'react';

type Contact = {
    id: string;
    firstName: string;
    lastName: string;
    status: string;
    phone: string;
};

type ContactContextType = {
    getContacts: () => Contact[] | null;
    addContact: (contact: Contact) => void;
    editContact: (id: string, contact: Contact) => void;
};

const ContactContext = createContext<ContactContextType>({
    getContacts: () => null,
    addContact: () => {},
    editContact: () => null,
});

type Props = {
    children: React.ReactNode;
};

export const ContactProvider = ({ children }: Props) => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    const getContacts = () => {
        return contacts;
    };

    const getContact = (id: string) => {};

    const addContact = (contact: Contact) => {
        setContacts((prev) => [...prev, contact]);
    };

    const editContact = (id: string, contact: Contact) => {
        const newContacts = contacts.map((item) => {
            if (item.id === id) {
                return contact;
            } else {
                return item;
            }
        });
        setContacts(newContacts);
    };

    return (
        <ContactContext.Provider
            value={{
                getContacts,
                addContact,
                editContact,
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};

export const useContactContext = () => useContext(ContactContext);
