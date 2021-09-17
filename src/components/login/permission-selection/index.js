import React, { Component } from "react"
import { Layout, Form, Input, InputNumber, Button, message, Table, Tag, Space, Col, Row, Avatar } from 'antd'
import { UserOutlined, LoginOutlined, NotificationOutlined } from '@ant-design/icons';
// import {api} from './config'
import "./index.css";

const { Header, Content, Footer, Sider } = Layout

class PermissionSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    componentDidMount() {
    }

    selectGoTo = (item) => {
        console.log(item)
        const route = {
            'home': '/home',
            'dreamStudio': '/dream-studio',
            'game': '/game',
            'test': '/test',
        }
        this.props.history.push(route[item.name])
    }

    render() {
        const modules = [
            {
                name: 'home',
                title: 'lthtest',
                permission: ['admin'],
            },
            {
                name: 'dreamStudio',
                title: 'dream画室',
                permission: ['admin', 'tourist'],
            },
            {
                name: 'game',
                title: '游戏游戏',
                permission: ['admin', 'tourist'],
            },
            {
                name: 'test',
                title: 'test',
                permission: ['admin', 'tourist'],
            },
        ]
        const permission = 'admin';
        const getPermissionModule = () => {
            modules.map(item => {
                console.log(item, 'item')
                if (item.permission.includes(permission)) {
                    return (
                        <Col span={8} style={{ height: 60, border: '1px solid #999' }} key={item.name}>
                            {item.name}
                        </Col>
                    )
                }
            })
        }
        return (
            <Row justify="center" align="middle" style={{ height: '100vh',}}>
                <Row justify="space-between" align="middle" style={{ width: '60%',}}>
                    <Col>
                        <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer', }} />
                        <span style={{ marginLeft: 12, fontWeight: 700 }}>林天浩</span>
                    </Col>
                    <Col>
                        <LoginOutlined style={{ fontSize: 20 }} />
                    </Col>
                    <Row style={{ width: '100%' }}>
                        {
                            modules.map(item => {
                                if (item.permission.includes(permission)) {
                                    return (
                                        <Col span={8} style={{ height: 160,padding: 16}} key={item.name}>
                                            <div 
                                                style={{border: '1px solid #999', width: '100%', height: '100%',padding:'8px',cursor: 'pointer'}}
                                                onClick={() => this.selectGoTo(item)}
                                            >
                                                {item.title}
                                            </div>
                                        </Col>
                                    )
                                }
                            })
                        }
                    </Row>
                </Row>
            </Row>
        )
    }
}

export default PermissionSelection