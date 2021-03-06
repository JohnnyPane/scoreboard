import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.processForm(user);
	}

  demoSubmit(e) {
    e.preventDefault();
    const guestUser = { username: 'guest', password: 'password' };
    const guest = Object.assign({}, guestUser);
    this.props.processForm(guest);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
  	return (
      <div className="login-form-container">
  			<form onSubmit={this.handleSubmit} className="login-form-box">
  				Welcome to the Office Scoreboard!
  				<br/>
  				Please {this.props.formType} or {this.props.navLink}
  				{this.renderErrors()}
  				<div className="login-form">
  					<br/>
  					<label>Username:
  						<input type="text"
  							value={this.state.username}
  							onChange={this.update('username')}
  							className="login-input"
  						/>
  					</label>
  					<br/>
  					<label>Password:
  						<input type="password"
  							value={this.state.password}
  							onChange={this.update('password')}
  							className="login-input"
  						/>
  					</label>
  					<br/>
  					<input className="session-submit" type="submit" value={this.props.formType} />
  				</div>
          <div className="demo-login">
          <p>-or-</p>
            <form onSubmit={this.demoSubmit} className="demo-box">
             Try the demo login!
              <br/>
              <input className="demo-submit" type="submit" value="Demo" />
            </form>
          </div>
  			</form>
  		</div>
  	);
  }
}

export default withRouter(LoginForm);