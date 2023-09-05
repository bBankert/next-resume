import { drawerSlice } from "./slices";
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    [drawerSlice.name]: drawerSlice.reducer
})