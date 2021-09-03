import React from 'react';
import {Row,Col} from 'antd';
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.tick())
    }

    componentDidUpdate () {
        
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({date: new Date()})
    }
    render() {
        return (
            <div>
                <h1>test1</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <Row gutter={[16, 24]}>
					<Col span={6}>
						<div >col-6</div>
					</Col>
					<Col span={6}>
						<div >col-6</div>
					</Col>
					<Col span={6}>
						<div >col-6</div>
					</Col>
					<Col span={6}>
						<div >col-6</div>
					</Col>
					<Col span={6}>
						<div >col-6</div>
					</Col>
					<Col span={6}>
						<div >col-6</div>
					</Col>
					<Col span={6}>
						<div >col-6</div>
					</Col>
					<Col span={6}>
						<div >col-6</div>
					</Col>
				</Row>
            </div>
        )
    }
  }


export default Clock;














