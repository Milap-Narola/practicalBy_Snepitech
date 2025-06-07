import { configureStore } from '@reduxjs/toolkit';
import cryptoslice from '../slice/cryptoslice';


export const store = configureStore({
    reducer: {
        coins: cryptoslice
    }
})