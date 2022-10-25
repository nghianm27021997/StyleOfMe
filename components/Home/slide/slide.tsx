import React from 'react'
import styles from "./slide.module.scss"
import Slider from "react-slick";
import { Animated } from "react-animated-css";

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
						<Animated animationOut="fadeOut" isVisible={true}>
								{item.collectionContent}
						</Animated>

						<div className="layer-slick1 animated" data-appear="fadeInUp" data-delay="800">
							<h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
								{item.season}
							</h2>
						</div>

						<div className="layer-slick1 animated" data-appear="zoomIn" data-delay="1600">
							<a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
								{item.shop}
							</a>
						</div>
					</div>
				</div>
			</div>
		));

	return (
		<>
			<Slider
				dots={true}
				infinite={true}
				slidesToShow={1}
				slidesToScroll={1}
				autoplay={true}
				speed={1000}
				autoplaySpeed={5000}
			>
				{renderSlides()}
			</Slider>
		</>
	)
}

export default slide