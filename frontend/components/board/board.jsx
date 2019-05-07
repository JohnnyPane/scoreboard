import React from 'react';
import { Link } from 'react-router-dom';

import BoardItem from './board_item';

const Board = ({ score, fetchStandings, standings }) => {
	return(
		<div className="single-board-show">
			<div className="index-redirect">
				<Link to="/">Back to Scores Index</Link>
			</div>
			<div className="single-board-display">
				<BoardItem score={score} fetchStandings={fetchStandings} standings={standings} />
			</div>
		</div>
	);
};

export default Board;

