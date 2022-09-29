import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
    name: "logged",
    initialState: {
        loggedState: false,
        user: null,
        token: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.loggedState = true
        },
        deleteUser: (state, action) => {
            state.user = null
            state.loggedState = false
        },
        setToken: (state, action) => {
            state.token = action.payload
            state.loggedState = true
        },
    }

})

export const { entry, setUser, deleteUser, setToken } = loggedSlice.actions

export default loggedSlice.reducer