import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import Card from './Card/Card'
const { Header, Content, Footer } = Layout;


class App extends Component {
  render() {
    return (
      <Layout className="layout" style={{height:"100vh"}}>
      <Header>
        <div style={{color: '#fff'}}>BSUIR schedule</div>
      </Header>
      <Content style={{ padding: '0 50px',}}>
        <div style={{ background: '#fff', padding: 24}}>
          <Card />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
    );
  }
}

export default App;
