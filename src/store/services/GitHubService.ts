import store from ".."
import { privateAPI } from "../../config/constants";
import { setError, setLoadingUser, setUsers } from "../slices/GitHubSlice"

// Function for Fetching the Data of user profile
export const fetchUserProfile = async (query: string) => {
    try {
        store.dispatch(setLoadingUser(true));
        const resp = await privateAPI.get(`/search/users?q=${query}`);
        if (resp) {
            store.dispatch(setUsers(resp?.data?.items));
        }
        return resp?.data?.items;
    } catch (error: any) {
        console.log("GET USER PROFILE ERROR", error);
        store.dispatch(setError(error?.response?.data?.message || "Error while fetching"));
        store.dispatch(setLoadingUser(false));
    } finally {
        store.dispatch(setLoadingUser(false));
    }
};

export const fetchUserByUserName = async (userName: string) => {
    try {
        const resp = await privateAPI.get(`/users/${userName}`);
        if (resp) {
            return resp?.data;
        }
    } catch (error: any) {
        console.log("GET USER PROFILE ERROR", error);
        store.dispatch(setError(error?.response?.data?.message || "Error while fetching"));
    }
};