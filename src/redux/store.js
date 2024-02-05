import { configureStore } from "@reduxjs/toolkit";
import FilmReducer from './filmslice/filmslice'
const store=configureStore({
    reducer:{
        film:FilmReducer,   /**partie li masaoula 3la film**/
    }
})
export default store