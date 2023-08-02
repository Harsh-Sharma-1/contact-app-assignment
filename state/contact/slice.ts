import { Contact } from '@/types/contact';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';

type ContactsState = {
    contacts: Contact[];
};

const initialState: ContactsState = {
    contacts: [],
};

export const contactSlice = createSlice({
    name: 'contact',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<Contact>) => {
            state.contacts.push(action.payload);
        },
        editContact: (
            state,
            action: PayloadAction<{ id: string; contact: Contact }>
        ) => {
            const index = state.contacts.findIndex(
                (item) => item.id === action.payload.id
            );
            state.contacts[index] = action.payload.contact;
        },
        deleteContact: (state, action: PayloadAction<string>) => {
            state.contacts = state.contacts.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
