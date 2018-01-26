import React, {Component} from 'react';

class Title extends Component {
	render(){
		return(
			
			<a href={"https://www.reddit.com" + this.props.postLink}><h2 className="article-title">{this.props.title}</h2></a>

		)
	}
}

export default Title;