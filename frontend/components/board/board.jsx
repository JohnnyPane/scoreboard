import React from 'react';
import { Link } from 'react-router-dom';

import BoardItem from './board_item';

const Board = ({ fetchScore, score, updateScore, scoreId, fetchScores }) => {
	return(
		<div className="single-board-show">
			<div className="index-redirect">
				<Link to="/">Back to Scores Index</Link>
			</div>
			<div className="single-board-display">
				<BoardItem 
					fetchScore={fetchScore} 
					score={score} 
					updateScore={updateScore}
					scoreId={scoreId}
					fetchScores={fetchScores} />
			</div>
		</div>
	);
};

export default Board;



