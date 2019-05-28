import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class UserSearchItem extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
	}

	render() {
		const { username } = this.props.opponent;
		return (
			<div className="opponent-search-items">
				<li>
					<Dropdown.Item>
						{username}
					</Dropdown.Item>
				</li>
			</div>
		)
	}
}

export default UserSearchItem;