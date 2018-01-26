import React, {Component} from 'react';

class Nav extends Component {
	render(){
		return(
			<div className="nav">
				<div id="reddit-logo">
					<img id="logo-img" src="./img/reddit.png"/>
				</div>
				<ul>
					<li id="selectedNav" className="navItem">Hot</li>
					<li className="navItem">new</li>
					<li className="navItem">rising</li>
					<li className="navItem">controversial</li>
					<li className="navItem">top</li>
					<li className="navItem">gilded</li>
					<li className="navItem">wiki</li>
				</ul>
			</div>
		)
	}
}

export default Nav;