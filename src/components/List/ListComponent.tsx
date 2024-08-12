import React from "react";
import { List } from "antd";
import ItemComponent from "../Item/ItemComponent";
import { GithubUserListProps } from "../../types/GitHubTypes";

const ListComponent: React.FC<GithubUserListProps> = ({
    users
}) => {

    return (
        <>
          <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(user) => <ItemComponent key={user.id} user={user}/>}
            style={{ marginTop: "20px", }}
            />
        </>
    );
};

export default ListComponent;