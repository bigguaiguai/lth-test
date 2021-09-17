import React, { Component } from 'react';
import { Drawer, Form, Input, InputNumber, Button, message, Space } from 'antd'
import { SearchOutlined, PlusOutlined, NotificationOutlined } from '@ant-design/icons';
import {api} from '../config'
// import './index.css';

class PersonDetailDrawer extends Component {
    constructor(props) {
        super(props)
        this.setState = {

        };
    }

    componentDidMount() {
        this.init()
    }

    init = () => {
        const { currentUser } = this.props;
        const prop = {
            _id: currentUser._id
        }
        this.$axios.post(api.getPersonDetail, prop).then(res => {
            console.log(res,'resresr')
            // message.success(res.msg || '删除成功')
        })
    }

    render() {
        const {
            visible,
            onClose,
            currentUser,
        } = this.props;
        return (
            <Drawer
                width={720}
                title={`${currentUser.name}的详细信息`}
                visible={visible}
                onClose={onClose}
                footer={
                    <Space style={{ float: 'right' }}>
                        <Button onClick={onClose}>取消</Button>
                        <Button type="primary" onClick={onClose}>确定</Button>
                    </Space>
                }
            >
                {visible &&
                    <div>
                        {currentUser.age}
                    </div>
                }
            </Drawer>
        )
    }
}
export default PersonDetailDrawer

