import React, { Component } from "react"
import { Link, } from 'react-router-dom';

import { Layout, Menu } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
// import "./index.less"
import SubMenu from "antd/lib/menu/SubMenu";

// import { Map, Marker, NavigationControl, InfoWindow,ZoomControl } from "react-bmapgl";

const { Header, Content, Footer, Sider } = Layout

class Nav1Opt1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    componentDidMount() {
        this.initMap()
    }

    initMap = () => {
        // console.log(window.BMap,'bmap')
        // console.log(window,'window')
        // debugger
        // const BMap = window.BMap;
        // console.log(BMap, 'BMap')
        // debugger
        // const map = new BMap.Map('myMap');
        // console.log(map, 'map')
        // debugger
        // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设    置中心点坐标和地图级别
        // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        // map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
        // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    }

    render() {
        // const { match, location } = this.props;
        return (
            <div>
                nav2opt1
                {/* <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11">
                    <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
                    <NavigationControl />
                    <ZoomControl />
                    <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }} text="内容" title="标题" />
                </Map> */}
                <div id="myMap"></div>
            </div>
        )
    }
}
export default Nav1Opt1