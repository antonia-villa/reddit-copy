import React, {Component} from 'react';

class Thumbnail extends Component {
	render(){
		return(
			<div className="thumbnail">
				{this.props.imgSrc}
			</div>
		)
	}
}

export default Thumbnail;