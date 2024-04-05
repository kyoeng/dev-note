import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface connectDeviceState {
    isMobile: boolean
}


const initialState: connectDeviceState = {
    isMobile: false
}


const connectDeviceSlice = createSlice({
    name: "connectDevice",
    initialState,
    reducers: {
        update: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
        }
    }
});



export const {update} = connectDeviceSlice.actions;
export default connectDeviceSlice.reducer;