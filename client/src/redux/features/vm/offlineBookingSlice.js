import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    turfDetails:{},
    sport: '',
    facility: '',
    date: '',
    slot: ''
}

const bookingSlice = createSlice({
    name: 'offlineBooking',
    initialState,
    reducers: {
        setTurfDetails: (state,action) => {
            state.turfDetails = action.payload;
        },
        setSport: (state, action) => {
            state.sport = action.payload;
        },
        setFacility: (state, action) => {
            state.facility = action.payload;
        },
        setSlots: (state, action) => {
            state.date = action.payload.date
            state.slot = action.payload.slot
        },
        clearBooking: (state) => {
            state.turfDetails = ''
            state.sport = ''
            state.facility = ''
            state.date = ''
            state.slot = ''
        }
    }
})

export const { setTurfDetails, setFacility, setSlots, setSport, clearBooking } = bookingSlice.actions;
export default bookingSlice.reducer;