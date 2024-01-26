import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
    name : "alert",
    initialState :{
        loading : false,
    },
    reducers : {
        showLoading : (state, action) =>{
            state.loading = true;
        },
        hideLoading : (state, action) =>{
            state.loading = false;
        }
    }
})

export const {showLoading, hideLoading} = alertSlice.actions;