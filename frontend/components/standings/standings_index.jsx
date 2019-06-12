import React from 'react';
import StandingIndexItem from './standings_index_item';
import { Link } from 'react-router-dom';

class StandingIndex extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.props.fetchStandings();
	}

	render() {
		const { standings, fetchStandings } = this.props;
		return (
			<div className="standings-index">
				<Link to="/">Back to scores</Link>
				<h1>Head to Head Standings</h1>
				<ul className="standings-index-list">
					{standings.reverse().map((standing, i) => (
						<StandingIndexItem
							key={i}
							standing={standing}
							fetchStandings={fetchStandings}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default StandingIndex;
