import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Greeting = ({ currentUser, logout }) => {
	const sessionLinks = () => (
		<nav className="login-signup">
			<Link to="/login">Login</Link>
			&nbsp;or&nbsp;
			<Link to="/signup">Sign up!</Link>
		</nav>
	);
	const personalGreeting = () => (
		<hgroup className="header-group">
			<h2 className="header-name">
				<Dropdown>
				  <Dropdown.Toggle variant="success" id="dropdown-basic">
				    Hi, {currentUser.username}
				  </Dropdown.Toggle>

				  <Dropdown.Menu>
				    <Dropdown.Item href="/#">Home</Dropdown.Item>
				    <Dropdown.Item href="#/standings">Standings</Dropdown.Item>
				    <Dropdown.Item href="#/scores/new">Create Scoreboard</Dropdown.Item>
				  </Dropdown.Menu>
				</Dropdown>
			</h2>
			<button className="header-button" onClick={logout}>Log Out</button>
		</hgroup>
	);

	return currentUser ? personalGreeting() : sessionLinks();

};

export default Greeting;

// <Link to="/standings"> Hi, {currentUser.username}</Link>
				// <div className="dropdown">
				//   <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				//     Hi, {currentUser.username}
				//   </button>
				//   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				//     <a className="dropdown-item" href="#">Action</a>
				//     <a className="dropdown-item" href="#">Another action</a>
				//     <a className="dropdown-item" href="#">Something else here</a>
				//   </div>
				// </div>