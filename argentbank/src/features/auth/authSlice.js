import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice ({
    name: "auth",
    initialState: {
        email: null,
        token: null,
        firstname:null,
        lastname:null
        },
    reducers: {
        setCredentials: (state, action) => {
            const { email, accessToken, firstname, lastname } = action.payload
            state.email = email
            state.token = accessToken
            state.firstname = firstname
            state.lastname = lastname
            console.log(state.token)
            console.log(state.firstname)
            console.log(state.lastname)
        },
        logOut: (state, action) => {
            state.email = null
            state.token = null
            state.firstname = null
            state.lastname = null
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.email
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentFirstname = (state) => state.auth.firstname
export const selectCurrentLastname = (state) => state.auth.lastname