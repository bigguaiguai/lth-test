import React, { Component } from "react"
import { Layout, Form, Input, InputNumber, Button, message, Table, Tag, Space, Col, Row, Avatar } from 'antd'
import { UserOutlined, LoginOutlined, NotificationOutlined } from '@ant-design/icons';
// import {api} from './config'
import "./index.css";

const { Header, Content, Footer, Sider } = Layout

class DreamStudio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    componentDidMount() {
    }

    render() {
        return (
            <Row justify="center" align="middle" style={{ height: '100vh',}}>
                dreamStudio
            </Row>
        )
    }
}

export default DreamStudio