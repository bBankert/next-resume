import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";


export const store = configureStore({
    reducer: rootReducer
})

export type AppStore = typeof store
export type AppState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>