import React from 'react';
import StandingItem from './standings_item';

class Standing extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchStandings().then(() => (
		console.log(this.props.standings)));
	}

	render() {
		return null
	}
};

export default Standing;

		// 	<div className="standings-div">
		// 		<ul>
		// 			{standings.reverse().map(standing => (
		// 				<StandingItem
		// 					key={standing.id}
		// 					standing={standing}
		// 					fetchStandings={fetchStandings}
		// 				/>
		// 				)
		// 			)
		// 		}
		// 	</ul>
		// </div>