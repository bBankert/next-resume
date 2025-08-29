import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";


export const makeStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']