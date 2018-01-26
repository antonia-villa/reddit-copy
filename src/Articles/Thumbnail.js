import React, {Component} from 'react';

class Thumbnail extends Component {
	render(){
		return(
			<li className="thumbnail-wrapper">
				<img className="thumbnail"src={this.props.imgSrc}/>
			</li>
		)
	}
}

export default Thumbnail;