import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    sport: '',
    facility: '',
    date: '',
    slot: ''
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setSport: (state, action) => {
            state.sport = action.payload;
        },
        setFacility: (state, action) => {
            state.facility = action.payload;
        },
        setSlots: (state, action) => {
            state.date = action.payload.date
            state.slot = action.payload.slot

            // if (state.slots.length) {
            //     const dateExist = state.slots.find(per => per.date === action.payload.date)
            //     if (dateExist) {
            //         console.log('26');
            //         const hello = state.slots.map(per => {
            //             console.log('27');
            //             if (per.date === action.payload.date) {
            //                 let slotExist = per.slot.indexOf(action.payload.slot)
            //                 if (slotExist === -1) {
            //                     let index = per.slot.findIndex((item) => Number(item.substring(0, 2)) > Number(slot.substring(0, 2)));
            //                     if (index === -1) index = per.slot.length;
            //                     console.log('index 32',index);
            //                     per.slot.splice(index, 0, slot);
            //                 } else {
            //                     console.log(' i am not minus one');
            //                 }
            //             } else {
            //                 return {...per}
            //             }
            //         })
            //         console.log('hello',hello);
            //     } else {
            //         state.slots.push({date:action.payload.date,slot:[action.payload.slot]});
            //     }
            // } else {
            //     try {
                    
            //         state.slots.push({date:action.payload.date,slot:[action.payload.slot]});
            //     } catch (error) {
            //         console.log(error);
            //     }
            // }
            // console.log('state.slots',state.slots);
        },
        clearBooking: (state) => {
            state.sport = ''
            state.facility = ''
            state.date = ''
            state.slot = ''
        }
    }
})

export const { setFacility, setSlots, setSport, clearBooking } = bookingSlice.actions;
export default bookingSlice.reducer;