import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";

const MainContent : React.FC = () => {

    return (
        <Layout style={{ height: "100vh" }}>
            <Header style={{
                background: "#fff",
                textAlign: "center",
            }}>
                <h1>GitHub User Search</h1>
            </Header>
        </Layout>
    );
};

export default MainContent;