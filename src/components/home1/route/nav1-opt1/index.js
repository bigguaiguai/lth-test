import React, { Component } from "react"
import { Layout, Form, Input, InputNumber, Button, message, Table, Modal, Space, Pagination, Row, DatePicker } from 'antd'
import { SearchOutlined, PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { api } from './config'
import "./index.css";
import UserDrawer from './user-drawer';
import PersonDetailDrawer from './person-detail-drawer';
import moment from 'moment';
import { connect } from "react-redux";
import { addNum, reduceNum } from '../../../../redux/actions/num'

const { Header, Content, Footer, Sider } = Layout
const { RangePicker } = DatePicker;

class Nav1Opt1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            tableLoading: true,
            total: 0,
            pageNo: 1,
            pageSize: 5,
            userDrawerVisible: false,
            userDrawerIsEdit: false,
            personDetailDrawerVisible: false,
            currentUser: {},
            searchProp: {},
            orderProp: {},
        }
    };

    componentDidMount() {
        this.search();
    }

    search = () => {
        const { pageNo, pageSize, searchProp, orderProp } = this.state;
        let prop = {
            search: searchProp,
            pageNo, pageSize,
            orderProp,
        }
        this.$axios.post(api.getPerson, prop).then(res => {
            if (res?.success) {
                message.success(res?.msg || '查询成功')
                const total = res.total;
                let tableData = res.result
                tableData?.forEach(item => {
                    item.createTime = moment(parseInt(item.createTime)).format('YYYY/MM/DD hh:mm:ss')
                })
                this.setState({
                    tableData,
                    total,
                })
            } else {
                message.error(res.msg || '查询失败1')
            }
            this.setState({
                tableLoading: false,
            })
        }).catch(err => {
            message.error(err || '查询失败2')
        })
    }

    getColumnsSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
            const renderType = {
                name: <Input
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearchFilter(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8 }}
                />,
                age: <InputNumber
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => { console.log(e); setSelectedKeys(e ? [e] : []) }}
                    onPressEnter={() => this.handleSearchFilter(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, width: 174 }}
                />,
                createTime: <RangePicker
                    style={{ marginBottom: 8 }}
                    showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    onChange={e => { console.log(e); setSelectedKeys(e ? e.map(item => item._d.getTime()) : []) }}
                />
            };
            return (
                <div style={{ padding: 8 }}>
                    {renderType[dataIndex]}
                    <Row justify='end'>
                        <Space>
                            <Button onClick={() => this.handleResetFilter(clearFilters, dataIndex)} size="small" >
                                重置
                            </Button>
                            <Button type='primary' icon={<SearchOutlined />} size="small" onClick={() => this.handleSearchFilter(selectedKeys, confirm, dataIndex)}>
                                搜索
                            </Button>
                        </Space>
                    </Row>
                </div>
            )
        }
    })

    getColumns() {
        return [
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                ...this.getColumnsSearchProps('name'),
                render: (text, record) => <Button type="link" onClick={() => { this.openUserDrawer(record, true) }}>{text}</Button>
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                sorter: true,
                ...this.getColumnsSearchProps('age'),
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime',
                sorter: true,
                ...this.getColumnsSearchProps('createTime'),
            },
            {
                title: '操作',
                key: 'action',
                fixed: 'right',
                width: 180,
                render: (record) => (
                    <Space size="middle">
                        <Button type="link" onClick={() => { this.getPersonDetail(record) }}>详情{this.props.num}</Button>
                        <Button type="link" onClick={() => { this.deleteUser(record) }}>删除</Button>
                    </Space>
                )
            }
        ]
    }

    handleSearchFilter = (selectedKeys, confirm, dataIndex) => {
        const { searchProp } = this.state;
        searchProp[dataIndex] = dataIndex === 'age' ? Number(selectedKeys) : selectedKeys;
        this.setState({
            pageNo: 1,
            searchProp,
        }, () => {
            confirm()
            this.search()
        })
    }

    handleResetFilter = (clearFilters, dataIndex) => {
        const { searchProp } = this.state;
        delete searchProp[dataIndex]
        this.setState({
            PageNo: 1,
            searchProp,
        }, () => {
            clearFilters()
            this.search()
        })
    }

    handlePageChange = (pageNo, pageSize) => {
        this.setState({
            pageNo,
            pageSize,
        }, () => {
            this.search()
        })
    }

    handleTableChange = (pagination, filters, sorter) => {
        const orderProp = {
            [sorter.field]: sorter.order === 'ascend' ? 1 : -1,
        }
        this.setState({
            orderProp
        }, () => {
            this.search()
        })
    }

    deleteUser(record) {
        Modal.confirm({
            title: '删除',
            content: `确认删除 ${record.name} 吗？`,
            icon: <ExclamationCircleOutlined />,
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk: () => { this.deleteUserOk(record) }
        })

    }

    deleteUserOk = (record) => {
        const prop = {
            _id: record._id
        }
        this.$axios.post(api.removePerson, prop).then(res => {
            message.success(res.msg || '删除成功')
            this.search()
        })
    }

    getPersonDetail = (record) => {
        this.setState({
            personDetailDrawerVisible: true,
            currentUser: record,
        })
    }

    openUserDrawer = (record, isEdit = false) => {
        this.setState({
            userDrawerVisible: true,
            userDrawerIsEdit: isEdit,
            currentUser: record,
        })
    }

    render() {
        // const { match, location } = this.props;
        const {
            tableData, tableLoading, total, pageSize, pageNo,
            userDrawerVisible, userDrawerIsEdit, currentUser,
            personDetailDrawerVisible,
        } = this.state;


        return (
            <Layout>
                <Header style={{ height: 48, lineHeight: 48 }}>
                    <Row justify='space-between' style={{ marginBottom: 16 }}>
                        <Button type="primary" icon={<PlusOutlined />} onClick={() => { this.openUserDrawer() }}>
                            新增
                        </Button>
                    </Row>
                </Header>
                <Content id='nav1-opt1-layout-content' className="nav1-opt1-layout-content">
                    <Table
                        style={{ maxHeight: 'calc(100vh - 230px)', height: 'calc(100vh - 230px)', overflowY: 'auto', }}
                        rowKey="_id"
                        sticky
                        bordered
                        columns={this.getColumns()}
                        dataSource={tableData}
                        loading={tableLoading}
                        pagination={false}
                        scroll={{ x: 'max-content' }}
                        onChange={this.handleTableChange}
                    />
                    <Row justify="end" style={{ margin: '16px 0' }}>
                        <Pagination
                            total={total}
                            showTotal={total => `共${total}条`}
                            showSizeChanger
                            defaultPageSize={pageSize}
                            current={pageNo}
                            onChange={this.handlePageChange}
                            pageSizeOptions={[5, 10, 20, 50, 100]}
                        />
                    </Row>
                </Content>
                {
                    userDrawerVisible &&
                    <UserDrawer
                        visible={userDrawerVisible}
                        isEdit={userDrawerIsEdit}
                        currentUser={currentUser}
                        search={this.search}
                        onClose={() => { this.setState({ userDrawerVisible: false }) }}
                    />
                }
                {
                    personDetailDrawerVisible &&
                    <PersonDetailDrawer
                        visible={personDetailDrawerVisible}
                        currentUser={currentUser}
                        onClose={() => { this.setState({ personDetailDrawerVisible: false }) }}
                    />
                }
            </Layout>
        )
    }
}
function getState(state) {
    console.log(state, 'state123')
    return {
        num: state.numRed.num
    }
}
// function getDispatch(dispatch) {
//     return {
//         add: () => dispatch(addNum()),
//         reduce: () => dispatch(reduceNum()),
//     }
// }
export default connect(getState)(Nav1Opt1)