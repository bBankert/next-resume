import { createSlice } from "@reduxjs/toolkit";

export interface DrawerState {
    open: boolean
}

const initialState: DrawerState = {
    open: false
}


export const drawerSlice = createSlice({
    name: "drawer",
    initialState,
    reducers: {
        setOpen(state, action) {
            state.open = action.payload
        }
    }
})