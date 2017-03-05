import React, { Component } from 'react';
import { default as sample } from '../../selectors/sample';

class IndexPage extends Component {
	render() {
		sample();
		return (
			<div>
				<h1>Hello World!</h1>
				{this.props.children}
			</div>
		);
	}
}

export default IndexPage;
