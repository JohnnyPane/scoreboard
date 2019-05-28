import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import UserSearchItem from './user_search_item';

class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: ''
		};
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
  	console.log(this.props);
  }

  componentDidUpdate() {
  	console.log(this.props);
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  // matches() {
  //   const matches = [];
  //   if (this.state.inputVal.length === 0) {
  //     return Object.values(this.props.opponents);
  //   }

  //   Object.values(this.props.opponents).forEach(name => {
  //     const sub = name.slice(0, this.state.inputVal.length);
  //     if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
  //       matches.push(name);
  //     }
  //   });

  //   if (matches.length === 0) {
  //     matches.push('No matches');
  //   }

  //   return matches;
  // }

  // selectName(event) {
  //   const name = event.currentTarget.innerText;
  //   this.setState({inputVal: name});
  // }

	render() {
		// const results = this.matches().map((result, i) => {
  //     return (
  //       <li key={i} onClick={this.selectName}>{result}</li>
  //     );
  //   });

    const { opponents } = this.props; 
		return (
			<div className="users-search">
				<Dropdown data-live-search="true">
				  <Dropdown.Toggle variant="success" id="dropdown-basic" data-live-search="true">
				  	Select an opponent
				  </Dropdown.Toggle>

				  <Dropdown.Menu data-live-search="true">
				  	<Form.Control 
				    	autoFocus
				    	onChange={this.handleInput}
				    	value={this.state.inputVal}
				    	placeholder="find opponent..."
				    />
				    <ul className="opponents-list">
              {opponents.map((opponent, i) => (
                <UserSearchItem
                  key={i}
                  opponent={opponent}
                />
                  )
                )
              }
            </ul>
				  </Dropdown.Menu>
				</Dropdown>
			</div>
		);
	}
}

export default SearchBox;
