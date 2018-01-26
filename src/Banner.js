import React, {Component} from 'react';

class Banner extends Component {
	render(){
		return(
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
						<input type="submit" value="submit" />
					</div>
				</form>
			</div>
		)
	}
}

export default Banner;