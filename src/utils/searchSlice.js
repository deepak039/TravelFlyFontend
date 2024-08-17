import { createSlice } from "@reduxjs/toolkit";

// Load user data from localStorage
const storedUser = JSON.parse(localStorage.getItem('user')) || null;
const storedLoggedIn = JSON.parse(localStorage.getItem('loggedin')) || false;

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedin: storedLoggedIn,
        details: storedUser
    },
    reducers: {
        addUser: (state, action) => {
            state.details = action.payload;
            state.loggedin = true;
            // Save to localStorage
            localStorage.setItem('user', JSON.stringify(state.details));
            localStorage.setItem('loggedin', JSON.stringify(state.loggedin));
        },
        removeUser: (state) => {
            state.details = null;
            state.loggedin = false;
            // Remove from localStorage
            localStorage.removeItem('user');
            localStorage.removeItem('loggedin');
        }
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
