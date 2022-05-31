import { createSlice } from '@reduxjs/toolkit'

export const categoryResultSlice = createSlice({

    name: 'categoryResult',
    initialState: {
        categoryResults: [],
        singleCategoryResults: [],
    },

    reducers: {
        setCategoryResults: (state, PayloadAction) => {
            state.categoryResults = PayloadAction.payload
        },
        setSingleCategoryResults: (state, PayloadAction) => {
            state.singleCategoryResults = PayloadAction.payload
        },
    }

})

export const { setCategoryResults, setSingleCategoryResults } = categoryResultSlice.actions


export default categoryResultSlice.reducer