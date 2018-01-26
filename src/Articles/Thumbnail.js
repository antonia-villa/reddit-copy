import React, {Component} from 'react';

class Thumbnail extends Component {
	render(){
		return(
			<li className="thumbnail">
				{this.props.imgSrc}
			</li>
		)
	}
}

export default Thumbnail;