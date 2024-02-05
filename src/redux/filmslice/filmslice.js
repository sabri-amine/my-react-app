import { createSlice } from "@reduxjs/toolkit"

const FilmReducer = createSlice({
    name: "film",
    initialState: [],  
    reducers: {
        all:(state,action)=>action.payload, // function li kistoki les film fi initialState
}
})

export const {all } = FilmReducer.actions
export default FilmReducer.reducer