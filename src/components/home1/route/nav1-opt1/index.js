import React, { Component } from "react"
import { Link, } from 'react-router-dom';

import { Layout, Form, Input, InputNumber, Checkbox, Button, message, Table, Tag, Space, Pagination } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "./index.less"

const { Header, Content, Footer, Sider } = Layout

class Nav1Opt1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            tableLoading: true,
        }
    };

    componentDidMount() {
        this.getUserData();

    }

    getUserData = () => {
        this.$axios.post('http://localhost:3000/users/getPerson').then(res => {
            this.setState({
                tableData: res.results,
                tableLoading: false
            })
        })
    }

    search = () => {
        this.formRef.validateFields().then(res => {
            const name = res.name
            const prop = {
                name,
            }
            this.$axios.post('http://localhost:3000/users/getPerson', prop).then(res => {
                message.success(res.msg || '搜索成功')
                console.log(res, 'get')
            })
        })
    }

    getColumns() {
        return [
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <Button type="link">{text}</Button>
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            // {
            //     title: '创建时间',
            //     dataIndex: 'createTime',
            //     key: 'createTime',
            // },
            // {
            //     title: '类型',
            //     key: 'tags',
            //     dataIndex: 'tags',
            //     render: tags => {
            //         <>
            //             {
            //                 tags.map(tag => {
            //                     let color = tag.length > 5 ? 'geekblue' : 'green';
            //                     return (
            //                         <Tag key={tag} color={color}>
            //                             {tag}
            //                         </Tag>
            //                     )
            //                 })
            //             }
            //         </>
            //     }
            // },
            {
                title: '操作',
                key: 'action',
                width: 180,
                render: (text, record) => (
                    <Space size="middle">
                        <a>查看详情{record.name}</a>
                        <a>删除</a>
                    </Space>
                )
            }
        ]
    }

    deleteRow(){
    }


    render() {
        // const { match, location } = this.props;
        const { tableData, tableLoading } = this.state;

        const onFinish = (values) => {
            console.log('Success:', values);
            const name = values.name;
            const age = values.age;
            const prop = {
                name,
                age,
            }
            this.$axios.post('http://localhost:3000/users/addPerson', prop).then(res => {
                message.success(res.msg)
                console.log(res, 'res')
                // debugger
            })
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        // let contentRef = document.getElementById('nav1-opt1-layout-content')
        // const tableHeight = contentRef ? contentRef.scrollHeight - 55 - 64 : 0;
        // console.log(tableHeight,'height')

        return (
            <Layout>
                <Header>
                    <Form
                        ref={(ref) => { this.formRef = ref }}
                        name="basic"
                        initialValues={{ remember: true }}
                        layout="inline"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="name"
                            name="name"
                            rules={[{ required: true, message: '请输入名字!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name='age'
                            label="age"
                            initialValue={18}
                            rules={[{ type: 'number', min: 0, max: 99 }]}
                        >
                            <InputNumber />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                新增
                            </Button>
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" onClick={this.search}>
                                搜索
                            </Button>
                        </Form.Item>
                    </Form>
                </Header>
                <Content id='nav1-opt1-layout-content' className="nav1-opt1-layout-content">
                    <Table
                        style={{ maxHeight: 'calc(100vh - 240px)', overflowY: 'auto' }}
                        rowKey="_id"
                        sticky
                        columns={this.getColumns()}
                        dataSource={tableData}
                        loading={tableLoading}
                        pagination={false}
                    />
                    <Pagination
                        total={85}
                        showSizeChanger
                        defaultPageSize={20}
                        defaultCurrent={1}
                        hideOnSinglePage
                        pageSizeOptions={[10, 20, 50, 100]}
                    />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}
export default Nav1Opt1