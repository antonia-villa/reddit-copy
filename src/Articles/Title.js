import React, {Component} from 'react';

class Title extends Component {
	render(){
		return(
			
			<li className="article-title">{this.props.title}</li>

		)
	}
}

export default Title;