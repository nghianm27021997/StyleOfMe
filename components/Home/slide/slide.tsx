import React, { Component, PropsWithChildren } from 'react';
import styles from "./slide.module.scss";
import Slider from "react-slick";
import { AnimatedProps } from 'react-animated-css';

class Animated extends Component<PropsWithChildren<AnimatedProps>> {}

const slide = () => {
	const slideArray = [
		{
			name: 'slide1',
			collectionContent: "Women Collection 2023",
			season: "NEW SEASON",
			shop: "Shop Now",
		},
		{
			name: 'slide2',
			collectionContent: "Men New-Season",
			season: "Jackets & Coats",
			shop: "Shop Now",
		},
		{
			name: 'slide3',
			collectionContent: "Men Collection 2023",
			season: "New arrivals",
			shop: "Shop Now",
		}
	]

	const renderSlides = () =>
		slideArray.map((item, index) => (
			<div className={`item-slick1 ${styles[item.name]}`} key={index}>
				<div className="container h-full">
					<div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
						<Animated
							animationIn={index === 0 ? "fadeInDown" : (index === 1 ? "rollIn" : "rotateInDownLeft")}
							animationOut={index === 0 ? "fadeInDown" : (index === 1 ? "rollIn" : "rotateInDownLeft")}
							isVisible={true}
							className="layer-slick1 animated"
							animationInDelay={0}
							animationOutDelay={0}
							animationInDuration={0}
							animationOutDuration={0}
							animateOnMount={true}
						>
							<span className="ltext-101 cl2 respon2">
								{item.collectionContent}
							</span>
						</Animated>

						<Animated
							animationIn={index === 0 ? "fadeInUp" : (index === 1 ? "lightSpeedIn" : "rotateInUpRight")}
							animationOut={index === 0 ? "fadeInUp" : (index === 1 ? "lightSpeedIn" : "rotateInUpRight")}
							isVisible={true}
							className="layer-slick1 animated"
							animationInDelay={800}
							animationOutDelay={800}
							animationInDuration={800}
							animationOutDuration={800}
						>
							<h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
								{item.season}
							</h2>
						</Animated>

						<Animated
							animationIn={index === 0 ? "zoomIn" : (index === 1 ? "slideInUp" : "rotateIn")}
							animationOut={index === 0 ? "zoomIn" : (index === 1 ? "slideInUp" : "rotateIn")}
							isVisible={true}
							className="layer-slick1 animated"
							animationInDelay={1600}
							animationOutDelay={1600}
							animationInDuration={1600}
							animationOutDuration={1600}
						>
							<a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
								{item.shop}
							</a>
						</Animated>
					</div>
				</div>
			</div>
		));

	return (
		<>
			<Slider
				dots={true}
				fade={true}
				slidesToShow={1}
				slidesToScroll={1}
				autoplay={true}
				speed={1500}
				autoplaySpeed={5000}
      	infinite={true}
			>
				{renderSlides()}
			</Slider>
		</>
	)
}

export default slide