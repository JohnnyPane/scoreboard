import React from 'react';
import StandingIndex from './standings_index';

const Standing = ({ standings, fetchStandings }) => (
	<div className="standings-show">
		<div className="standings-tables">
			<StandingIndex standings={standings} fetchStandings={fetchStandings} />
		</div>
	</div>
);

export default Standing;

