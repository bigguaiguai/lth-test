import React, { Component } from 'react';
import { Drawer, Form, Input, InputNumber, Button, message, Space } from 'antd'
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
        isEdit && this.formRef?.setFieldsValue({
            name: currentUser.name,
            age: currentUser.age,
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
                                label="name"
                                name="name"
                                rules={[{ required: true, message: '请输入名字!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='age'
                                label="age"
                                rules={[{ type: 'number', min: 0, max: 99 }]}
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                        </Form>
                    </div>
                }
            </Drawer>
        )
    }
}
export default userDrawer

