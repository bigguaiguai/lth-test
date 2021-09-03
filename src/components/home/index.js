
import React, { Component } from "react";
import { Link, } from 'react-router-dom';

import { Layout, Menu } from "antd";
import './home.css'

const { Header, Content } = Layout

class Home extends Component {
    state = {
    }
    render() {
        const { match, location } = this.props;
        const pathname = location.pathname.split('/')[1]
        const headMenu = [
            { name: 'antd', to: `home1` },
            { name: 'nav 2', to: 'home2' },
            { name: 'nav 3', to: 'home3' },
            { name: 'nav 4', to: 'home4' },
        ]
        let headMenuChange = (value) => {
            console.log(value, 'value')
        }
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[pathname]}
                        onClick={headMenuChange}>
                        {
                            headMenu.map(item => {
                                return (
                                    <Menu.Item key={item.to}>
                                        <Link to={`${match.path}${item.to}`}>{item.name}</Link>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Header>
                <Content style={{marginTop: 64}}>
                    {this.props.children}
                </Content>
            </Layout>
        )
    }
}

export default Home
