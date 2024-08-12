import { UserType } from "../store/interfaces/user"

export type GithubUserListProps = {
    users: Array<UserType>
};

export type GithubUserItemProps = {
    user: UserType
};

export type GithubUserModalProps = {
    visible: boolean;
    onClose: () => void;
    user: {
        avatar_url: string;
        login: string;
        followers: number;
        following: number;
        location: string;
        name: string;
        html_url: string;
    } | null;
}