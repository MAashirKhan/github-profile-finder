import React from "react";
import { List } from "antd";
import ItemComponent from "../Item/ItemComponent";
import { GithubUserListProps } from "../../types/GitHubTypes";

const ListComponent: React.FC<GithubUserListProps> = ({
    users
}) => {

    return (
        <div className="user-list-container">
          <List
            pagination={{
                pageSize: 10
            }}
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(user) => <div style={{ cursor: "pointer"}} ><ItemComponent key={user.id} user={user}/></div>}
            className="user-list"
            />
        </div>
    );
};

export default ListComponent;