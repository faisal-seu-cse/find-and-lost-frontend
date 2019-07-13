import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Input, Button } from 'antd';

const { Header } = Layout;
const { Search } = Input;

const NavHeader = () => {
    return (
        <Fragment>
            <div className="top-header">
                <Link to="/">Find-And-Lost</Link>
                <Search className="global-search" placeholder="input search text"
                    onSearch={value => console.log(value)}
                    enterButton
                    size="large"
                />
                <Button size='large' type="danger">Post</Button>
            </div>
            <Header className="header">
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home">
                        Home
                    <Link to="/" />
                    </Menu.Item>
                    <Menu.Item key="losts">
                        Lost-Details
                    <Link to="/losts" />
                    </Menu.Item>
                </Menu>
            </Header>
        </Fragment>
    );
}

export default NavHeader;