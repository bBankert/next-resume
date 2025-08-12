import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { rootReducer } from "../app/redux/rootReducer";


export const makeStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
// export const store = configureStore({
//     reducer: rootReducer
// })

// export type AppStore = typeof store
// export type AppState = ReturnType<typeof store.getState>
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     AppState,
//     unknown,
//     Action
// >