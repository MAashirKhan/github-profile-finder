import { createSlice } from "@reduxjs/toolkit";
import { GithubStateType } from "../interfaces/user";

const initialState: GithubStateType = {
    loadingUsers: false,
    users: [],
    error: null
}

export const githubStateSlice = createSlice({
    name: "githubSlice",
    initialState,
    reducers: {
        setLoadingUser(state, action) {
            state.loadingUsers = action.payload;
        },
        setUsers(state, action) {
            state.users = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { setLoadingUser, setUsers, setError } = githubStateSlice.actions;

export default githubStateSlice.reducer;