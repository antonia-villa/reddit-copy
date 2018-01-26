import React, {Component} from 'react';

//Importing children
import Thumbnail from './Thumbnail.js';
import Title from './Title.js';

class Article extends Component {
	render(){
		return(
			<div className="article">
				<ul className="article-items">
				<li className="article-index"><h2>{this.props.articleIndex}</h2></li>
				<li className="article-votes"><h3>{this.props.votes}</h3></li>
				<li className="article-publish-info"><h3>submitted {this.props.hours} hours ago by <a href={"https://www.reddit.com/user/"+this.props.author}>{this.props.author} </a>to <a href={"https://www.reddit.com/r/"+this.props.subreddit}>r/{this.props.subreddit}</a></h3></li>
				<Thumbnail imgSrc={this.props.imgSrc} />
				<Title title={this.props.title} />
				</ul>
			</div>
		);
	}
}

export default Article;