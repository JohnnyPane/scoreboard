import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ReactAutocomplete from 'react-autocomplete';

class ScoreForm extends React.Component {
	constructor(props) {
		super(props);
		this.playerOne = { name: props.player_one };
		this.state = {
			game_type: '',
			player_two: '',
			final_score: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.navigateToScoreboard = this.navigateToScoreboard.bind(this);
		this.selectOpponent = this.selectOpponent.bind(this, 'player_two');
	}

	componentDidMount() {
		this.props.fetchOtherUsers();
	}

	navigateToScoreboard() {
		this.props.history.push('/');
	}

	update(property) {
		return e => this.setState({
			[property]: e.target.value
		});
	}

	selectOpponent(e) {
		return e => this.setState({
			player_two: e.currentTarget.innerText
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData()
		formData.append('score[game_type]', this.state.game_type);
		formData.append('score[player_one]', this.playerOne['name']);
		formData.append('score[player_two]', this.state.player_two);
		formData.append('score[final_score]', this.state.final_score);
		this.props.createScore(formData).then(() => (
		this.navigateToScoreboard()))
	};

	render() {
		const { game_type, player_two, final_score } = this.state;
		const { opponents } = this.props;
		if (opponents.length < 1) {
      return <div>Component is loading...</div>
    }

		return (
			<div className="new-score-container">
			  <Link to="/">Back to Scores Index</Link>
			  <div className="new-score-form-container">
					<div className="new-score-form">
						<h3 className="new-score-title">Create a Scoreboard!</h3>
						<br />
						<form onSubmit={this.handleSubmit}>
							<label className="score-field">Game Type: </label>
							<input
								type="text"
								value={game_type}
								onChange={this.update('game_type')}
								className="score-field"
							/>

							<label className="score-field">Player One: </label>
							<input
								type="text"
								value={this.playerOne.name}
								onChange={this.update('player_one')}
								className="score-field"
							/>

							<label className="score-field">Player Two: </label>
							<ReactAutocomplete
				        items={opponents}
				        shouldItemRender={(item, player_two) => item.username.toLowerCase().indexOf(player_two.toLowerCase()) > -1}
				        getItemValue={item => item.username}
				        renderItem={(item, highlighted) =>
				          <div
				            key={item.email}
				            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
				          >
				            {item.username}
				          </div>
				        }
				        value={this.state.player_two}
				        onChange={e => this.setState({ player_two: e.target.value })}
				        onSelect={player_two => this.setState({ player_two })}
				      />


							<br/>

							<label className="score-field">Game up to: </label>
							<input
								type="text"
								value={final_score}
								onChange={this.update('final_score')}
								className="score-field"
							/>

							<div className="button-holder">
		            <input
		              type="submit"
		              value="Create Score"
		              className="new-score-button"
		            />
		          </div>
		        </form>
		      </div>
		     </div>
      </div>
		);
	}
}

export default withRouter(ScoreForm);

							// <Downshift
							//     onChange={this.update('player_two')}
							//     itemToString={item => (item ? item.value : '')}
							//   >
							//     {({
							//       getInputProps,
							//       getItemProps,
							//       getLabelProps,
							//       getMenuProps,
							//       isOpen,
							//       inputValue,
							//       highlightedIndex,
							//       selectedItem,
							//     }) => (
							//       <div>
							//         <label {...getLabelProps()}>Search for an opponent: </label>
							//         <input {...getInputProps()} />
							//         <ul {...getMenuProps()}>
							//           {isOpen
							//             ? opponents
							//                 .filter(item => !inputValue || item.value.includes(inputValue))
							//                 .map((item, index) => (
							//                   <li
							//                     {...getItemProps({
							//                       key: item.value,
							//                       index,
							//                       item,
							//                       style: {
							//                         backgroundColor:
							//                           highlightedIndex === index ? 'lightgray' : 'white',
							//                         fontWeight: selectedItem === item ? 'bold' : 'normal',
							//                       },
							//                     })}
							//                   >
							//                     {item.value}
							//                   </li>
							//                 ))
							//             : null}
							//         </ul>
							//       </div>
							//     )}
							//   </Downshift>

// import React from 'react';
// import { withRouter } from 'react-router';
// import { Link } from 'react-router-dom';
// import SearchBox from './score_user_search';


// class ScoreForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.playerOne = { name: props.player_one };
// 		this.state = {
// 			game_type: '',
// 			player_two: '',
// 			final_score: 25
// 		};
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 		this.navigateToScoreboard = this.navigateToScoreboard.bind(this);
// 	}

// 	componentDidMount() {
// 		this.props.fetchOtherUsers();
// 	}

// 	navigateToScoreboard() {
// 		this.props.history.push('/');
// 	}

// 	update(property) {
// 		return e => this.setState({
// 			[property]: e.target.value
// 		});
// 	}

// 	handleSubmit(e) {
// 		e.preventDefault();
// 		const formData = new FormData()
// 		formData.append('score[game_type]', this.state.game_type);
// 		formData.append('score[player_one]', this.playerOne['name']);
// 		formData.append('score[player_two]', this.state.player_two);
// 		formData.append('score[final_score]', this.state.final_score);
// 		this.props.createScore(formData).then(() => (
// 		this.navigateToScoreboard()))
// 	};

// 	render() {
// 		const { game_type, player_two, final_score } = this.state;
// 		const { opponents } = this.props;
// 		return (
// 			<div className="new-score-container">
// 			  <Link to="/">Back to Scores Index</Link>
// 			  <div className="new-score-form-container">
// 					<div className="new-score-form">
// 						<h3 className="new-score-title">Create a Scoreboard!</h3>
// 						<br />
// 						<form onSubmit={this.handleSubmit}>
// 							<label className="score-field">Game Type: </label>
// 							<input
// 								type="text"
// 								value={game_type}
// 								onChange={this.update('game_type')}
// 								className="score-field"
// 							/>

// 							<label className="score-field">Player One: </label>
// 							<input
// 								type="text"
// 								value={this.playerOne.name}
// 								onChange={this.update('player_one')}
// 								className="score-field"
// 							/>

// 							<label className="score-field">Player Two: </label>
// 							<input
// 								type="text"
// 								value={player_two}
// 								onChange={this.update('player_two')}
// 								className="score-field"
// 							/>

// 							<SearchBox opponents={opponents} />
// 							<br/>

// 							<label className="score-field">Game up to: </label>
// 							<input
// 								type="text"
// 								value={final_score}
// 								onChange={this.update('final_score')}
// 								className="score-field"
// 							/>

// 							<div className="button-holder">
// 		            <input
// 		              type="submit"
// 		              value="Create Score"
// 		              className="new-score-button"
// 		            />
// 		          </div>
// 		        </form>
// 		      </div>
// 		     </div>
//       </div>
// 		);
// 	}
// }

// export default withRouter(ScoreForm);




