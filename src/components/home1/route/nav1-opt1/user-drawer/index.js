import React, { Component } from 'react';
import { Drawer, Form, Input, InputNumber, Button, message, Space, Radio } from 'antd'
import { SearchOutlined, PlusOutlined, NotificationOutlined } from '@ant-design/icons';
import {api} from '../config'
import './index.css';

class userDrawer extends Component {
    constructor(props) {
        super(props)
        this.setState = {

        };
    }

    componentDidMount() {
        this.init()
    }

    init = () => {
        const { currentUser, isEdit } = this.props;
        const {detail} = currentUser;
        console.log(detail)
        isEdit && this.formRef?.setFieldsValue({
            name: currentUser.name,
            age: currentUser.age,
            address: detail.address,
            tel: detail.tel,
            height: detail.height,
            weight: detail.weight,
            sex: detail.sex,
        })
    }

    addOrUpdateUser = () => {
        this.formRef.validateFields().then(values => {
            const { search, onClose, isEdit, currentUser } = this.props;
            const name = values.name;
            const age = values.age;
            const prop = isEdit ? {
                name,
                age,
                _id: currentUser?._id 
            } : {
                name,
                age,
            };
            let url = isEdit ? api.updatePerson : api.addPerson;
            this.$axios.post(url, prop).then(res => {
                message.success(res.msg);
                search()
                onClose()
            })
        }).catch(err => {
            message.danger(err)
        })
    }

    render() {
        const {
            isEdit,
            visible,
            onClose,
        } = this.props;
        return (
            <Drawer
                width={720}
                title={isEdit ? '编辑信息' : '新增用户'}
                visible={visible}
                onClose={onClose}
                footer={
                    <Space style={{ float: 'right' }}>
                        <Button onClick={onClose}>取消</Button>
                        <Button type="primary" onClick={this.addOrUpdateUser}>确定</Button>
                    </Space>
                }
            >
                {visible &&
                    <div>
                        <Form
                            ref={(ref) => { this.formRef = ref }}
                            layout={'horizontal'}
                            labelCol={{ span: 3, }}
                        >
                            <Form.Item
                                name="name"
                                label="姓名"
                                rules={[{ required: true, message: '请输入名字!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='age'
                                label="年龄"
                                rules={[{ type: 'number', min: 0, max: 99 }]}
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                name='address'
                                label="地址"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='tel'
                                label="电话"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='height'
                                label="身高"
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                name='weight'
                                label="体重"
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                name='sex'
                                label="性别"
                            >
                                <Radio.Group>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={0}>女</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Form>
                    </div>
                }
            </Drawer>
        )
    }
}
export default userDrawer

