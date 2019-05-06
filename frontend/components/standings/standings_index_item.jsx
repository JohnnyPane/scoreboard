import React from 'react';

class StandingItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { game_type, player_one, player_two, player_one_wins, player_two_wins } = this.props.standing;
		return (
			<div className="standing-item-list">
				<li>
					<h4>Game: {game_type}</h4>
					<span>{player_one}</span>
					<span>{player_two}</span>
					<br />
					<span>{player_one_wins}</span>
					<span>{player_two_wins}</span>
				</li>
			</div>
		)
	}
}

export default StandingItem;