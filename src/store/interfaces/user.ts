export interface UserType {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
}

export interface GithubStateType {
    users: Array<UserType>;
    loadingUsers: boolean;
    error: string | null;
}
