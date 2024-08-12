import Axios from "axios";

export const API_URL = "https://api.github.com";
const GITHUB_PAT = process.env.GITHUB_PAT || "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";

export const privateAPI = Axios.create({ 
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${GITHUB_PAT}`
    }
});