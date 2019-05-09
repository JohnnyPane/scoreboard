import React from 'react';

class StandingItem extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
	}

	render() {
		const { game_type, player_one, player_two } = this.props.standing;
		return (
			<div className="standing-item-list">
				<li>
					<h4>Game: {this.props.standing[0]}</h4>
					<span>{this.props.standing[1]}</span>
					<span>{this.props.standing[2]}</span>
				</li>
			</div>
		)
	}
}

export default StandingItem;