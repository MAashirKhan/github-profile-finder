import React from "react";
import { GithubUserModalProps } from "../../types/GitHubTypes";
import { Avatar, Button, Col, Modal, Row } from "antd";


const ModalComponent : React.FC<GithubUserModalProps> = ({
    onClose,
    visible,
    user
}) => {
    
    if(!user){
        return null;
    };

    return (
        <>
          <Modal open={visible} onCancel={onClose} footer={null} title={"Profile Info"}>
            <Row gutter={[20, 5]}>
                <Col xs={8}>
                    <Avatar src={user?.avatar_url} shape={'circle'} />
                </Col>
                <Col xs={16}>
                    <h2>{user?.login}</h2>
                </Col>
                <Col xs={24}>
                    <p><strong>Followers: </strong> {user?.followers}</p>
                </Col>
                <Col xs={24}>
                    <p><strong>Following: </strong> {user?.following}</p>
                </Col>
                <Col xs={24}>
                    <p><strong>Location: </strong> {user?.location}</p>
                </Col>
                <Col xs={24}>
                    <Button type={'primary'} onClick={() => {
                        window.open(user?.html_url)
                    }}>View GitHub Profile</Button>
                </Col>
            </Row>
          </Modal>
        </>
    );
};

export default ModalComponent;