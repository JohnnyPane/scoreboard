import React from 'react';
import { Link } from 'react-router-dom';

import BoardItem from './board_item';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.props.fetchScores();
	}

	render() {
		const { score, updateScore, scoreId, fetchScores } = this.props;

		return(
			<div className="single-board-show">
				<div className="index-redirect">
					<Link to="/">Back to Scores Index</Link>
				</div>
				<div className="single-board-display">
					<BoardItem  
						score={score} 
						updateScore={updateScore}
						scoreId={scoreId}
						fetchScores={fetchScores} />
				</div>
			</div>
		);
	}
};

export default Board;



