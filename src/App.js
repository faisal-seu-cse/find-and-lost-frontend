import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';
import NavHeader from './components/layout/Header';
import Home from './components/pages/Home';
import LostDetails from './components/pages/LostDetails';
import LostList from './components/pages/LostList';

const { Content, Footer } = Layout;


const App = () => {
  return (
    <Layout className="layout">
      <NavHeader />
      <Content className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/losts" component={LostList} />
          <Route exact path="/lost-details" component={LostDetails} />
        </Switch>
      </Content>
      <Footer className="footer">Find-And-Lost ©2019 Created by Faisal</Footer>
    </Layout>
  );
}

export default App;
