import React, { Component } from 'react'
import { Layout, Form, Input, Row, message, Checkbox, Button } from 'antd'
import loginBg from '../../../img/login-bg.jpeg'
import {api} from '../config'
import './index.css'

const { Header, Content, Footer } = Layout
export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subLoading: false,
            switchFlag: true, // true 是登录页面 false是注册页面
        }
    }
    onFinish = (values) => {
        const { switchFlag } = this.state;
        const { userName, password } = values;

        const data = {
            userName, password
        }
        let url = switchFlag ? api.login : api.register;
        const tip = switchFlag ? '登录' : '新增';
        this.$axios.post(url, data).then(res => {
            //判断成功失败 清除loading
            if (res.success) {
                message.success(res.msg || tip + '成功');
                // true是登录
                if (switchFlag) {
                    sessionStorage.setItem('token',res.token)
                    this.props.history.push('/permission-selection');
                }
            } else {
                message.error(res.msg || tip + '失败');
            }
            this.setState({ subLoading: false });

        }).catch(err => {
            message.error(tip + '失败' + err || tip + '失败');
            this.setState({ subLoading: false });
        })
    }
    toRegister = () => {
        this.setState({
            switchFlag: !this.state.switchFlag,
        });
    }
    render() {
        const { subLoading, switchFlag } = this.state;
        const loginContentStyle = {
            height: "100%",
            width: "100%",
            background: `url(${loginBg}) no-repeat`,
            backgroundSize: '100% 100%',
        }
        return (
            <Layout>
                <Header>
                    linthTest
                </Header>
                <Content>
                    <Row style={loginContentStyle} justify="center" align="middle">
                        <Row className="login-input-container">
                            <Form
                                style={{ width: '100%' }}
                                labelAlign="left"
                                labelCol={{ span: 6 }}
                                onFinish={this.onFinish}
                            >
                                <Form.Item
                                    label="用户名"
                                    name="userName"
                                    rules={[{ required: true, message: '请输入用户名！' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="密码"
                                    name="password"
                                    rules={[{ required: true, message: '请输入密码！' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item
                                    name='agree'
                                    valuePropName="checked"
                                    rules={[{ required: true, message: '请先勾选并同意相关协议！' }]}
                                >
                                    <Checkbox
                                        style={{ fontSize: '12px' }}
                                    >
                                        阅读并同意《服务协议》和《隐私声明》
                                    </Checkbox>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block loading={subLoading}>{switchFlag ? '登录' : '注册'}</Button>
                                </Form.Item>
                                <Row justify="space-between">
                                    <Form.Item>
                                        <a style={{ fontSize: '12px' }} onClick={this.toRegister}>{`立即${switchFlag ? '注册' : '登录'}`}</a>
                                    </Form.Item>
                                    <Form.Item>
                                        <a style={{ fontSize: '12px' }}>忘记密码</a>
                                    </Form.Item>
                                </Row>
                            </Form>
                        </Row>
                    </Row>
                </Content>
                <Footer>
                    林天浩语录:一个月能忘打卡三次  这个月已经三次了  不能再忘了
                </Footer>
            </Layout>
        )
    }
}