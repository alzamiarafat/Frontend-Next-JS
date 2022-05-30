import { createSlice } from '@reduxjs/toolkit'

export const categoryResultSlice = createSlice({

    name: 'categoryResult',
    initialState: {
        categoryResults: [],
    },

    reducers: {
        setCategoryResults: (state, PayloadAction) => {
            state.categoryResults = PayloadAction.payload
        },
    }

})

export const { setCategoryResults } = categoryResultSlice.actions


export default categoryResultSlice.reducer