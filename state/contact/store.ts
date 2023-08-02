import { configureStore } from '@reduxjs/toolkit';
import contact from './slice';
export const store = configureStore({
    reducer: { contact },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
