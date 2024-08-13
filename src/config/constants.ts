import Axios from "axios";

export const API_URL = "https://api.github.com";
const GITHUB_PAT = "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";

export const privateAPI = Axios.create({ 
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${GITHUB_PAT}`
    }
});