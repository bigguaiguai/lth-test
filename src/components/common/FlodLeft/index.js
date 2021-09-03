import React, { Component } from 'react';
import { LeftOutlined } from '@ant-design/icons';

import './index.css';

class FlodLeft extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		const { foldLeftOpen, foldLeft } = this.props;
		return (
			// <div className={foldLeftOpen ? 'flod-container flod-container-open' : 'flod-container flod-container-close'}>
			<div className='test'>
				{this.props.children}
				{/* <div className={foldLeftOpen ? 'flod-container-main-open' : 'flod-container-main-close'}>
					{this.props.children}
				</div>
				<div className={foldLeftOpen ? 'fold-button fold-button-open' : 'fold-button fold-button-close'} onClick={foldLeft}>
					<LeftOutlined style={{ color: '#fff', fontSize: '12px', lineHeight: '28px' }} />
				</div> */}
			</div>
			// <div style={{border: '1px solid red'}}>{this.props.children}</div>
		);
	}
}

export default FlodLeft;
