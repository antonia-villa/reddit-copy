import React, {Component} from 'react';

//Importing children
import Thumbnail from './Thumbnail.js';
import Title from './Title.js';

class Article extends Component {
	render(){
		return(
			<div className="article">
				<Thumbnail imgSrc={this.props.imgSrc} />
				<Title title={this.props.title} />
			</div>
		);
	}
}

export default Article;