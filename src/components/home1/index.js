import React, { Component } from "react"
import { Link, Switch, Route, } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
// import "./index.less"
import './index.css';
import Nav1Opt1 from "./route/nav1-opt1";
import Nav1Opt2 from "./route/nav1-opt2";
import Nav2Opt1 from "./route/nav2-opt1";
import Nav2Opt2 from "./route/nav2-opt2";
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
class Home1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foldLeftOpen: true,
        }
    };

    // handleSiderMenuChange = ({ item, key, keyPath, domEvent }) => {
    //     console.log(item, key, keyPath, domEvent, this.props.location);
    // };

    render() {
        // const {  } = this.state;
        const { match, location, } = this.props;
        const siderMenu = [
            {
                title: '布局',
                icon: <UserOutlined />,
                key: 'nav1',
                items: [
                    { name: '搜索表格', key: 'nav1-opt1', to: '/nav1-opt1' },
                    { name: 'option2', key: 'nav1-opt2', to: '/nav1-opt2' },
                    // { name: 'option3', key: 'nav1opt3' },
                ]
            },
            {
                title: 'subnav 2',
                icon: <LaptopOutlined />,
                key: 'nav2',
                items: [
                    { name: 'option1', key: 'nav2-opt1', to: '/nav2-opt1' },
                    { name: 'option2', key: 'nav2-opt2', to: '/nav2-opt2' },
                    // { name: 'option3', key: 'nav2opt3' },
                ]
            },
            // {
            //     title: 'subnav 3',
            //     icon: <NotificationOutlined />,
            //     key: 'sub3',
            //     items: [
            //         { name: 'option1', key: 'nav3opt1' },
            //         { name: 'option2', key: 'nav3opt2' },
            //         { name: 'option3', key: 'nav3opt3' },
            //     ]
            // },
        ]
        const defaultSelectedKeys = location.pathname.split('/').pop()
        const defaultOpenKeys = defaultSelectedKeys.split('-')[0]
        const breadcrumbNameMap = {
            '/home': 'home',
            [`${match.path}`]: 'antd',
            [`${match.path}/nav1-opt1`]: '布局-搜索表格',
            [`${match.path}/nav1-opt2`]: '布局-opt2',
            [`${match.path}/nav2-opt1`]: 'option1',
            [`${match.path}/nav2-opt2`]: 'option12',
        }
        const pathSnippets = location.pathname.split('/').filter(i => i);
        const extraBreadcrumbItems = pathSnippets.map((item, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>{breadcrumbNameMap[url]}</Link>
                </Breadcrumb.Item>
            )
        })
        const breadcrumbItems = [].concat(extraBreadcrumbItems);

        return (
            <Layout className='home1-layout'>
                <Sider collapsible={true} style={{borderRight: '1px solid #eee'}}>
                    <Menu
                        defaultSelectedKeys={[defaultSelectedKeys]}
                        defaultOpenKeys={[defaultOpenKeys]}
                        mode="inline"
                    // onClick={this.handleSiderMenuChange}
                    >
                        {
                            siderMenu.map(item => {
                                return (
                                    <SubMenu key={item.key} title={item.title} icon={item.icon}>
                                        {
                                            item.items.map(list => {
                                                return (
                                                    <Menu.Item key={list.key}>
                                                        <Link to={`${match.path}${list.to}`}>{list.name}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout className='home-layout-right-layout'>
                    <Breadcrumb style={{ margin: '16px 0' }}>{breadcrumbItems}</Breadcrumb>
                    <Content>
                        <Switch>
                            <Route path={`${match.path}/nav1-opt1`} component={Nav1Opt1}></Route>
                            <Route path={`${match.path}/nav1-opt2`} component={Nav1Opt2}></Route>
                            <Route path={`${match.path}/nav2-opt1`} component={Nav2Opt1}></Route>
                            <Route path={`${match.path}/nav2-opt2`} component={Nav2Opt2}></Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default Home1