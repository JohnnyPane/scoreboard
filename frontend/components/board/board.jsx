import React from 'react';
import { Link } from 'react-router-dom';

import BoardItem from './board_item';

const Board = ({ score, updateScore }) => {
	return(
		<div className="single-board-show">
			<div className="index-redirect">
				<Link to="/">Back to Scores Index</Link>
			</div>
			<div className="single-board-display">
				<BoardItem score={score} updateScore={updateScore} />
			</div>
		</div>
	);
};

export default Board;

// import React from 'react';
// import { Link } from 'react-router-dom';

// import BoardItem from './board_item';

// class Board extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			player_one_score: 0,
// 			player_two_score: 0
// 		}
// 	}

// 	componentDidMount() {
// 		console.log(this.state);
// 		console.log(this.props);
// 	}


// 	render() {
// 		const { score } = this.props;
// 		return(
// 			<div className="single-board-show">
// 				<div className="index-redirect">
// 					<Link to="/">Back to Scores Index</Link>
// 				</div>
// 				<div className="single-board-display">
// 					<BoardItem score={score} />
// 				</div>
// 			</div>
// 		);
// 	}
// };

// export default Board;

