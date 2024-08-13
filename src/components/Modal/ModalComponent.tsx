import React from "react";
import { GithubUserModalProps } from "../../types/GitHubTypes";
import { Avatar, Button, Col, Modal, Row } from "antd";


const ModalComponent: React.FC<GithubUserModalProps> = ({
    onClose,
    visible,
    user
}) => {

    if (!user) {
        return null;
    };

    return (
        <>
            <Modal open={visible} onCancel={onClose} footer={null} title={<h3>Profile Info</h3>}>
                <Row gutter={[20, 5]}>
                    <Col xs={24}>
                        <div className="avatar-container">
                            <Avatar size={100} src={user?.avatar_url} shape={'circle'} />
                            <h2>{user?.login}</h2>
                        </div>
                    </Col>
                    <Col xs={24}>
                        <div className="card-container">
                            <div className="card-content">
                                <h4>Followers</h4>
                                <h2>{user?.followers}</h2>
                            </div>
                            <div className="card-content">
                                <h4>Following</h4>
                                <h2>{user?.following}</h2>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24}>
                        <div className="location">
                            <p><strong>Location: </strong> {user?.location}</p>
                        </div>
                    </Col>
                    <Col xs={24}>
                        <Button className="btn-profile" onClick={() => {
                            window.open(user?.html_url)
                        }}>View GitHub Profile</Button>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};

export default ModalComponent;