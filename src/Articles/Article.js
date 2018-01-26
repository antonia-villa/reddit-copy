import React, {Component} from 'react';

//Importing children
import Thumbnail from './Thumbnail.js';
import Title from './Title.js';

class Article extends Component {
	render(){
		return(
			<div className="article">
				<ul className="article-items">
				<Thumbnail imgSrc={this.props.imgSrc} />
				<Title title={this.props.title} />
				</ul>
			</div>
		);
	}
}

export default Article;