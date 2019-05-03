import React from 'react';

class Standing extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props)
		this.props.fetchStandings();
	}

	render() {
		return null
	}
};

export default Standing;