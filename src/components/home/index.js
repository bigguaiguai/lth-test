
import React, { Component } from "react";
import { Link, Route, Redirect } from 'react-router-dom';
import { Layout, Menu, ConfigProvider, Row, Col, Dropdown, Avatar, Divider } from "antd";
import { UserOutlined, SettingOutlined, EnterOutlined } from '@ant-design/icons';
import './home.css'
import Home1 from "../home1";
import Clock from "./TempMain";
import TempMainTwo from './TempMainTwo';
import Four from './TempMainFour';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';

import {addNum,reduceNum} from '../../redux/actions/num'
import { connect } from "react-redux";
const { Header, Content } = Layout

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        
    }
    
    toPersonalCenter = () => {

    }
    test = () => {
        this.props.add()
        console.log(this.props)
    }
    logout = () => {
        console.log(this.props, 'home props')
        this.props.history.push('/login')
    }

    render() {
        const { match, location } = this.props;
        console.log(this.props,'props')
        const pathname = location.pathname.split('/')[2]
        const headMenu = [
            { name: 'antd', to: `home1` },
            { name: 'nav 2', to: 'home2' },
            { name: 'nav 3', to: 'home3' },
            { name: 'nav 4', to: 'home4' },
        ]
        let headMenuChange = (value) => {
            console.log(value, 'value')
        }
        const avatarMenu = (
            <Row justify="center" style={{ width: 160, border: '1px solid #ddd', borderRadius: 8 }}>
                <Col style={{ textAlign: 'center', fontSize: '24px', borderBottom: '1px solid #ddd', paddingBottom: 12 }}>zhangsan{this.props.num}</Col>
                <Menu>
                    <Menu.Item key="personalCenter" icon={<UserOutlined />}>
                        <a onClick={this.toPersonalCenter}>个人中心</a>
                    </Menu.Item>
                    <Menu.Item key="set" icon={<SettingOutlined />} >
                        <a onClick={this.toPersonalCenter}>设置</a>
                    </Menu.Item>
                    <Menu.Item key="test" icon={<SettingOutlined />} >
                        <a onClick={this.test}>test</a>
                    </Menu.Item>
                    <Menu.Item key="logout" icon={<EnterOutlined />}>
                        <a onClick={this.logout}>退出</a>
                    </Menu.Item>
                </Menu>
            </Row>
        )
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', }}>
                    <Row justify="space-between" align="middle"
                        style={{ background: '#001529' }}
                    >
                        <Col span={22}>
                            <Menu
                                mode="horizontal"
                                theme="dark"
                                selectedKeys={[pathname]}
                                onClick={headMenuChange}>
                                {
                                    headMenu.map(item => {
                                        return (
                                            <Menu.Item key={item.to}>
                                                <Link to={`${match.path}/${item.to}`}>{item.name}</Link>
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </Menu>
                        </Col>
                        <Col span={2}>
                            <Dropdown
                                style={{ border: '1px solid red' }}
                                overlay={avatarMenu}
                                placement="bottomCenter"
                                arrow
                                trigger="click"
                            >
                                <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer', }} />
                            </Dropdown>
                            <span style={{ color: '#fff', padding: '0 8px' }}>zhangsan</span>
                        </Col>
                    </Row>
                </Header>
                <Content style={{ marginTop: 64 }}>
                    <ConfigProvider locale={locale}>
                        <Route exact path={match.path}>
                            <Redirect to={`${match.path}/home1/nav1-opt1`} />
                        </Route>
                        <Route exact path={`${match.path}/home1`}>
                            <Redirect to={`${match.path}/home1/nav1-opt1`} />
                        </Route>
                        <Route path={`${match.path}/home1`} key='/home1' component={Home1}></Route>
                        <Route exact path={`${match.path}/home2`} key='/home2' component={Clock}></Route>
                        <Route exact path={`${match.path}/home3`} key='/home3' component={TempMainTwo}></Route>
                        <Route exact path={`${match.path}/home4`} key='/home4' component={Four}></Route>
                    </ConfigProvider>
                </Content>
            </Layout>
        )
    }
}
function getState(state) {
    return {
        num: state.numRed.num
    }
}
function getDispatch(dispatch) {
    return {
        add: () => dispatch(addNum()),
        reduce: () => dispatch(reduceNum()),
    }
}

export default connect(getState,getDispatch)(Home)
