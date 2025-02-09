import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from './signUpReducer';

export const store = configureStore({
    reducer: {
        signUp: signUpReducer
    }
});