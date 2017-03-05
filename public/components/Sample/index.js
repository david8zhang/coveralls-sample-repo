import React, { Component } from 'react';

class Sample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hello: false
		};
	}

	render() {
		return (
			<div>
				<h1>{this.props.header}</h1>
				<button onClick={() => this.setState({ hello: true })}>
					Click me!
				</button>
				{
					this.state.hello &&
					<h3>Hello!</h3>
				}
			</div>
		);
	}
}

export default Sample;
