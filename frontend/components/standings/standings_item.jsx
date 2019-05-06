import React from 'react';

class StandingItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { game_type, player_one, player_two, player_one_wins, player_two_wins } = this.props;
		return (
			<div className="standing-item-list">
				<li>
					<h4>{game_type}</h4>
					<span>{standing.player_one}</span>
					<span>{standing.player_two}</span>
					<span>{standing.player_one_wins}</span>
					<span>{standing.player_two_wins}</span>
				</li>
			</div>
		)
	}
}

export default StandingItem;