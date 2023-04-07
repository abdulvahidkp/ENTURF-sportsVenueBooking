import { createSlice } from "@reduxjs/toolkit";
import { turfs } from '../../thunk/vm/turfThunk';

const initialState = {
    turfs: [],
    loading: false,
    error: null
}

const vmTurfsSlice = createSlice({
    name: 'vmTurfs',
    initialState,
    reducers: {
        updateTurfIsBlocked: (state, action) => {
            const { id } = action.payload;
            const turfToUpdate = state.turfs.find(turf => turf._id === id);
            if (turfToUpdate) {
                console.log(turfToUpdate);
                turfToUpdate.vmIsBlocked = !turfToUpdate.vmIsBlocked;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(turfs.pending, (state) => {
            state.loading = true
            state.error = null
        })

        builder.addCase(turfs.fulfilled, (state, action) => {
            state.loading = false
            state.turfs = action.payload
        })
        builder.addCase(turfs.rejected, (state, action) => {
            console.log(action.error)
            state.loading = false
            state.error = action.error.message
        })

    }
})

export const { updateTurfIsBlocked } = vmTurfsSlice.actions;

export default vmTurfsSlice.reducer;