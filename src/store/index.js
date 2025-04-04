import { configureStore } from '@reduxjs/toolkit'
import userListReducer from './userListSlice';

export default configureStore ({
    reducer: {
        list: userListReducer
    },
})