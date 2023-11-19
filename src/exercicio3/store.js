import { configureStore } from '@reduxjs/toolkit';
import bankreducer from './bankreducer';

const store = configureStore({
    reducer: {
        banking: bankreducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;