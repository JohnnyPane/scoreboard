import React from 'react';
import StandingIndex from './standings_index';

const Standing = ({ standings, fetchStandings, createScore }) => (
	<div className="standings-show">
		<div className="standings-tables">
			<StandingIndex standings={standings} fetchStandings={fetchStandings} createScore={createScore} />
		</div>
	</div>
);

export default Standing;

