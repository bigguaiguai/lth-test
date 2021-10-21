import React, { Component } from 'react';
import { Drawer, Form, Input, InputNumber, Button, message, Space, Row, Descriptions, Spin } from 'antd'
import { SearchOutlined, PlusOutlined, NotificationOutlined } from '@ant-design/icons';
import { api } from '../config'
// import './index.css';

class PersonDetailDrawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    componentDidMount() {
        this.init()
    }

    init = () => {
        // const {detail} = this.state;
        // const { currentUser } = this.props;
        // const prop = {
        //     _id: currentUser._id
        // }
        // this.$axios.post(api.getPersonDetail, prop).then(res => {
        //     if(res.success){
        //         message.success(res.msg || '详细信息查询成功')
        //         const {detail} = res.result[0]
        //         console.log(detail,'detail')
        //         this.setState({
        //             detail:detail,
        //         })
        //     }else {
        //         message.error(res.msg || '详细信息查询失败')
        //     }
        //     this.setState({
        //         loading: false
        //     })
        // }).catch(e => {
        //     this.setState({
        //         loading: false
        //     })
        // })
    }

    render() {
        // const {  } = this.state;
        const {
            visible,
            onClose,
            currentUser,
        } = this.props;
        const { detail } = currentUser;
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
                    <Row>
                        <Descriptions title="个人详情" bordered column={2} style={{ width: '100%' }}>
                            <Descriptions.Item label="姓名">{currentUser.name}</Descriptions.Item>
                            <Descriptions.Item label="年龄">{currentUser.age}</Descriptions.Item>
                            <Descriptions.Item label="地址">{detail.address}</Descriptions.Item>
                            <Descriptions.Item label="电话">{detail.tel}</Descriptions.Item>
                            <Descriptions.Item label="身高">{detail.height}</Descriptions.Item>
                            <Descriptions.Item label="体重">{detail.weight}</Descriptions.Item>
                            <Descriptions.Item label="性别">{detail.sex ? '男' : '女'}</Descriptions.Item>
                        </Descriptions>
                    </Row>
                }
            </Drawer>
        )
    }
}
export default PersonDetailDrawer

