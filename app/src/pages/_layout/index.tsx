import React from "react";
import { Layout } from "antd";
import Header from "../../compoenents/Header";

const { Content, Footer } = Layout;

const DefaultLayout: React.FC = (props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content style={{ padding: 12 }}>{props.children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Davi ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default DefaultLayout;
