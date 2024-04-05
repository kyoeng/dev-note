import { configureStore } from "@reduxjs/toolkit";
import connectDeviceSlice from "./connectDeviceSlice";




export const store = configureStore({
    reducer: {
        connectDevice: connectDeviceSlice,
    }
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;