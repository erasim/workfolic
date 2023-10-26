/** @format */

import React from "react";

import pic from "../pic/image.jpg";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
	return (
		<div className='slider-main'>
			<h1 className='slider-header'>Manage your money from Anywhere</h1>
			<p style={{ color: "antiquewhite" }}>
				view all analytic and grow your business from Anywhere
			</p>
			<br />

			{/* ==================slider Start========== */}

			<Carousel>
				<Carousel.Item interval={1000}>
					<div className='card-main'>
						<div className='card-upper'>
							textAlign style prop does not work when the components nested in a
							Text are wrapped in a View . This happens only on iOS and looks
							like it broke ...
						</div>
						<div className='card-lower'>
							<img src={pic} alt='pic' className='card-lower-pic' />
							<span className='card-lower-profile'>Asim Hasnain Zaidi</span>
							<span className='card-lower-designaion'>Engineer</span>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<div className='card-main'>
						<div className='card-upper'>
							textAlign style prop does not work when the components nested in a
							Text are wrapped in a View . This happens only on iOS and looks
							like it broke ...
						</div>
						<div className='card-lower'>
							<img src={pic} alt='pic' className='card-lower-pic' />
							<span className='card-lower-profile'>Asim Hasnain Zaidi</span>
							<span className='card-lower-designaion'>Engineer</span>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className='card-main'>
						<div className='card-upper'>
							textAlign style prop does not work when the components nested in a
							Text are wrapped in a View . This happens only on iOS and looks
							like it broke ...
						</div>
						<div className='card-lower'>
							<img src={pic} alt='pic' className='card-lower-pic' />
							<span className='card-lower-profile'>Asim Hasnain Zaidi</span>
							<span className='card-lower-designaion'>Engineer</span>
						</div>
					</div>
				</Carousel.Item>
			</Carousel>

			{/* =======================Slider End============== */}
		</div>
	);
};

export default Slider;
