import React, { useState } from "react";
import { GithubUserItemProps } from "../../types/GitHubTypes";
import { Avatar, List } from "antd";
import { fetchUserByUserName } from "../../store/services/GitHubService";
import ModalComponent from "../Modal/ModalComponent";

const ItemComponent : React.FC<GithubUserItemProps> = ({ user }) => {

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleItemClick = async (username: string) => {
    try {
      const userDetails = await fetchUserByUserName(username);
      setSelectedUser(userDetails);
      setIsModalVisible(true);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };
    return (
        <>
          <List.Item onClick={() => handleItemClick(user?.login)}>
            <List.Item.Meta
                avatar={<Avatar src={user?.avatar_url} shape="circle" />}
                title={<h2>{user?.login}</h2>} 
            />
          </List.Item>

          <ModalComponent user={selectedUser} visible={isModalVisible} onClose={handleCloseModal} />
        </>
    );
};

export default ItemComponent;