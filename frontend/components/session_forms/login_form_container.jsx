import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
	return {
		errors: errors.session,
		formType: 'login',
		navLink: <Link to="/signup">sign up instead</Link>
	};
};

const mapDispatchToProps = dispatch => {
	return {
		processForm: (user) => dispatch(login(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);