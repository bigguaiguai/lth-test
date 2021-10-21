import React, { Component } from "react"
import { Link } from 'react-router-dom';
import * as echarts from 'echarts';
import { Layout, Spin, Row, Col } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "./index.css";

const { Header, Content, Footer, Sider } = Layout;

class Nav1Opt1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            noData: false, // 有无数据显示

        }
    };

    componentDidMount() {
        this.getOptions(); // 获取数据

    }

    getOptions = () => {
        //图表颜色按顺序取用
        const chartsColorMap = ['#2EACFF', '#FD6067', '#F9BE0E', '#FF892F', '#39BF7C', '#5762EC', '#15D9D9', '#67CBF4', '#b5dbf4', '#b7eed9', '#ff9fd1', '#f2e0ac', '#ffb1b1', '#e9cffe'];
        const data = [];
        const options = {
            title: {
                text: '入门text',
            },
            color: [...chartsColorMap],
            series: [
                {
                    type: 'pie',
                    data: [
                        {
                            value: 335,
                            name: '直接访问'
                        },
                        {
                            value: 234,
                            name: '联盟广告'
                        },
                        {
                            value: 1548,
                            name: '搜索引擎'
                        }
                    ],
                    radius: '50%'
                }
            ]
        }
        const options2 = {
            title: {
                text: '入门text2',
                subtext: '例子2',
                left: 'center',
            },
            tooltip: {
                trigger: 'item',
                // formatter: `{b}: {c}%`,
                // extraCssText: 'box-shadow: 0 2px 24px 0 rgba(0,0,0,0.1)'
            },
            legend: {
                right: '2%',
                top: '0',
                orient: 'vertical',
                itemWidth: 14,
                itemHeight: 14,
                // textStyle: {color: 'rgba(0,0,0,0.5)'},
                // itemStyle: {borderRadius: 10},
                icon: 'circle',
                formatter: (name) => {
                    return `${name}`;
                },
            },
            color: [...chartsColorMap],
            series: [
                {
                    type: 'pie',
                    data: [
                        {
                            value: 335,
                            name: '直接访问'
                        },
                        {
                            value: 234,
                            name: '联盟广告'
                        },
                        {
                            value: 1548,
                            name: '搜索引擎'
                        }
                    ],
                    radius: ['60%', '75%'],
                }
            ]
        }
        const options3 = {
            title: {
                text: '入门折线图1',
                subtext: 'teest111',
                left: 'center',
            },
            tooltip: {
                trigger: 'axis', // axis
            },
            legend: {
                right: 'center',
                bottom: '0',
                // formatter: name => name,
            },
            xAxis: {
                // type: 'category',
                // boundaryGap: false,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                type: 'time',
                splitLine: {
                    show: false,
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false,
                }
            },
            dataZoom: [{
                type: 'inside',
                orient: 'horizontal',
                xAxisIndex: 0,
                filterMode: 'none',
            }],
            series: [
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    data: data,
                },
                // {
                //     name: 'Video',
                //     type: 'line',
                //     stack: 'Total',
                //     data: [20, 30, 40, 50, 60, 70, 80]
                // },
                // {
                //     name: 'Direct',
                //     type: 'line',
                //     stack: 'Total',
                //     data: [30, 40, 50, 60, 70, 80, 100]
                // },
                // {
                //     name: 'Union',
                //     type: 'line',
                //     stack: 'Total',
                //     data: [20, 60, 70, 80, 10, 150, 0]
                // },
                // {
                //     name: 'Search',
                //     type: 'line',
                //     stack: 'Total',
                //     data: [0, 30, 90, 10, 60, 70, 100]
                // },
            ]
        }
        // 初始化echar实例
        var myChart = echarts.init(this.chartContainer)
        var myChart2 = echarts.init(this.chartContainer2)
        var myChart3 = echarts.init(this.chartContainer3)
        // 设置options
        myChart.setOption(options)
        myChart2.setOption(options2)
        myChart3.setOption(options3)
    }

    render() {
        const { loading, noData, } = this.state;
        // const { match, location } = this.props;
        return (
            <div style={{ height: '100%', border: '1px solid red' }}>
                <Row style={{ height: '50%', border: '1px solid red' }}>
                    <Col
                        span={12}
                        style={{ height: '100%', border: '1px solid green' }}
                    >
                        <div
                            style={{ height: '100%', border: '1px solid yellow' }}
                            ref={el => this.chartContainer = el}
                        />
                    </Col>
                    <Col
                        span={12}
                        style={{ height: '100%', border: '1px solid green' }}
                    >
                        <div
                            style={{ height: '100%', border: '1px solid yellow' }}
                            ref={el => this.chartContainer2 = el}
                        />
                    </Col>

                </Row>
                <Row style={{ height: '50%', border: '1px solid red' }}>
                    <Col
                        span={12}
                        style={{ height: '100%', border: '1px solid green' }}
                    >
                        <div
                            style={{ height: '100%', border: '1px solid yellow' }}
                            ref={el => this.chartContainer3 = el}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Nav1Opt1