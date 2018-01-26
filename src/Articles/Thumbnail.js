import React, {Component} from 'react';

class Thumbnail extends Component {
	render(){
		return(
			<li className="thumbnail-wrapper">
				<a href={this.props.imgSrc}><img className="thumbnail"src={this.props.imgSrc}/></a>
			</li>
		)
	}
}

export default Thumbnail;