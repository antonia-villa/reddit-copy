import React, {Component} from 'react';
import StateNames from "./States.js";

class Banner extends Component {
	 constructor(props) {
	    super(props);
	    this.state = {
	      values: StateNames.states
		};
	}

	render(){
	let optionTemplate = this.state.values.map(v => (
      <option value={v}>{v}</option>
    ));

		return(
			<div>
			<div id="reddit-banner">
				<img id="banner-img" src='./img/banner.png' />
				<form className="login-form">
					<input className="form-search" type="text" value="search" placeholder="search" />
					<div className="login-form-line">
						<input className="login-info" type="text" value="username" placeholder="username" />
						<input className="login-info" type="text" value="password" placeholder="password" />
						<div className="remember-me">
							<input type="checkbox" value="remember me" />
							<a href="#">reset</a> 
							<a href="#">password</a>
						</div>
						<div className="loginButton">
						<input type="submit" value="login" />
						</div>
					</div>
				</form>
			</div>
				<div id="menuarea">
					<span className="dropdown-title">popular in </span>
					<select value={this.state.value} onChange={this.handleChange}>
			          {optionTemplate}
			        </select>
					<span className="dropdown-title">selete state </span>
			        <select value={this.state.value} onChange={this.handleChange}>
			          {optionTemplate}
			        </select>
				</div>
			</div>
		

		)
	}
}

export default Banner;