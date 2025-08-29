import { drawerSlice } from "./features/drawer/drawer-slice";
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    [drawerSlice.name]: drawerSlice.reducer
})