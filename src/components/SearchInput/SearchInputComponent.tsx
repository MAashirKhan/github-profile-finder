import { Alert, Input, Spin } from "antd";
import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import debounce from 'lodash/debounce';
import { fetchUserProfile } from "../../store/services/GitHubService";
import ListComponent from "../List/ListComponent";

const SearchInputComponent: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const { users, loadingUsers, error } = useAppSelector((state) => state.github);

    // HANDLE SEARCH FUNCTION FOR THE SEARCH
    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setQuery(searchTerm);

        // CREATING DEBOUNCE SEARCH FOR THE SEARCH AFTER ONE SEC
        const debouncedSearch = debounce(async (query: string) => {
            if (query.trim()) {
                await fetchUserProfile(query);
            }
        }, 1000);

        debouncedSearch(searchTerm);
    };


    return (
        <>
            <Input className="search-input-container" placeholder="Type to Search Github User..." value={query} onChange={handleSearch} />
            {error && <Alert message={error || "ERROR WHILE FETCHING"} type="error" showIcon/>}
            <div style={{
                marginTop: "20px",
                width: "100%",
            }}>
                {loadingUsers ? <Spin size="large"/> :
                <ListComponent users={users} />}
            </div>
        </>
    );
};

export default SearchInputComponent;