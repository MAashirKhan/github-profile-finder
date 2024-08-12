import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import SearchInputComponent from "../components/SearchInput/SearchInputComponent";
import Header from "../components/Header/Header";

const MainContent : React.FC = () => {

    return (
        <Layout className="ant-layout-container">
            <Header />
            <Content className="main-body-container">
                <SearchInputComponent />
            </Content>
        </Layout>
    );
};

export default MainContent;