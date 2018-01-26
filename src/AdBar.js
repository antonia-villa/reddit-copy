import React, {Component} from 'react';


class AdBar extends Component {
	render(){
		return(
			<div className ="side-bar">
				<p className="ad-note">advertisement</p>
				<div className="first-ad">

	            <div id="carouselIndicators2" className="carousel slide" data-ride="carousel">
					  <div className="carousel-inner" role="listbox">
					    <div className="carousel-item active">
					      <img className="d-block img-fluid" src="../img/nightlife.jpg" alt="Landing Page" />
					    </div>
					    <div className="carousel-item">
					      <img className="d-block img-fluid" src="../img/cafe.jpg" alt="Logged-in Landing Page" />
					    </div>
					    <div className="carousel-item">
					      <img className="d-block img-fluid" src="../img/tiger.jpg" alt="Data Entry Form" />
					    </div>
					    <div className="carousel-item">
					      <img className="d-block img-fluid" src="../img/food1.jpg" alt="Visual Comparison" />
					    </div>
					  </div>
					</div>

				 </div>
				<div className="btn new-link"> Submit New Link</div>
				<div className="btn new-link"> Submit New Text Post</div>
				<div className="reddit-gold">
				 	<p className="gold-text">daily reddit gold goal</p>
				 	<div className="gold-bar">
				 		<div className="gold-bar-child">
				 		</div>
				 	</div>
				 </div>
				<div className="second-ad"> 
    				<div id="carouselIndicators2" className="carousel slide" data-ride="carousel">
					  <div className="carousel-inner" role="listbox">
					    <div className="carousel-item active">
					      <img className="d-block img-fluid" src="../img/food2.jpg" alt="Landing Page" />
					    </div>
					    <div className="carousel-item">
					      <img className="d-block img-fluid" src="../img/sydney.jpg" alt="Logged-in Landing Page" />
					    </div>
					    <div className="carousel-item">
					      <img className="d-block img-fluid" src="../img/canoe.jpg" alt="Data Entry Form" />
					    </div>
					    <div className="carousel-item">
					      <img className="d-block img-fluid" src="../img/fall.jpg" alt="Visual Comparison" />
					    </div>
					  </div>
					</div>
				 </div>
			</div>
		)
	}
}




export default AdBar;