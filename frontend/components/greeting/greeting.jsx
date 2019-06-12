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
				<Dropdown className="nav-dropdown">
				  <Dropdown.Toggle variant="success" id="dropdown-basic">
				    Hi, {currentUser.username}
				  </Dropdown.Toggle>

				  <Dropdown.Menu>
				    <Dropdown.Item href="/#">Home</Dropdown.Item>
				    <Dropdown.Item href="/#/standings">Standings</Dropdown.Item>
				    <Dropdown.Item href="/#/scores/new">Create Scoreboard</Dropdown.Item>
				  </Dropdown.Menu>
				</Dropdown>
			</h2>
			<button className="header-button" onClick={logout}>Log Out</button>
		</hgroup>
	);

	return currentUser ? personalGreeting() : sessionLinks();

};

export default Greeting;
