import React, {Component} from 'react';


class AdBar extends Component {
	render(){
		return(
			<div className ="side-bar">
				<p className="ad-note">advertisement</p>
				<div className="first-ad"> </div>
				<div className="btn new-link"> Submit New Link</div>
				<div className="btn new-link"> Submit New Text Post</div>
				<div className="reddit-gold"> daily reddit gold goal</div>
				<div className="second-ad">  </div>
			</div>
		)
	}
}




export default AdBar;