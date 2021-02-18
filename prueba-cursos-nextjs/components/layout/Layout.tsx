import React from 'react'
import { Layout } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import styled from "@emotion/styled";

const { Header, Footer, Sider, Content } = Layout;

const HeaderTitle = styled.h1`
  color:white;
`

const LayoutComponent = (props) => {
  return (
    <>
      <Layout>
        <Header>
          <HeaderTitle>Asignación de cursos</HeaderTitle>
        </Header>
        <Content style={{ padding: '50px' }}>{props.children}</Content>
        <Footer>Santiago Rodriguez ©2021</Footer>
      </Layout>
    </>
  )
}

export default LayoutComponent
