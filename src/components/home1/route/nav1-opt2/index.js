import React, { Component } from "react"
import { Link, } from 'react-router-dom';

import { Layout, Menu } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "./index.less"
import SubMenu from "antd/lib/menu/SubMenu";

const { Header, Content, Footer, Sider } = Layout

class Nav1Opt1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        // const { match, location } = this.props;
        return (
            <div>
                opt2
            </div>
        )
    }
}
export default Nav1Opt1