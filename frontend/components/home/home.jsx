import React from 'react';

import MainScore from '../main_score/main_score';
import ScoreIndex from './score_index';

class Home extends React.Compoent {

	render() {
		return (
			<section>
				<div className="scoreboarded">
					<MainScore />
					<ScoreIndex scores={scores} />
				</div>
			</section>
		);
	}
}

export default Home;