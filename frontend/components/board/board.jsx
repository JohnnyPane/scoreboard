import React from 'react';
import { Link } from 'react-router-dom';

import BoardItem from './board_item';

const Board = ({ score, scoreId, fetchScore }) => {
	return(
		<div className="single-board-show">
			<div className="single-board-display">
				<Link to="/">Back to Scores Index</Link>
				<BoardItem score={score}  />
			</div>
		</div>
	);
};

export default Board;

