/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import BuyCondition from './BuyCondition';
import DetailInformation from './DetailInformation';
import FsLightbox from 'fslightbox-react';

const DetailProduct = () => {
  const [productIndex, setProductIndex] = useState(0);
  const [productsImages, setProductsImages] = useState([
    '/images/product-detail-01.jpg',
    '/images/product-detail-02.jpg',
    '/images/product-detail-03.jpg',
  ])
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  function openLightboxOnSlide(number: number) {
    console.log(number)
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  }

  const slideDetail = () =>
    productsImages.map((item, index) => (
      <div className="item-slick3" data-thumb={item} key={index}>
        <div className="wrap-pic-w pos-relative">
          <img src={`/images/product-detail-0${index + 1}.jpg`} alt="IMG-PRODUCT" />
          <a
            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
            href="#!"
            onClick={() => openLightboxOnSlide(index+1)}>
            <i className="fa fa-expand"></i>
          </a>
        </div>
      </div>
    ))

  const renderCustomThumbs = () =>
    productsImages.map((item, index) => (
      <div className="item-slick3" data-thumb={item} key={index}>
        <div className="wrap-pic-w pos-relative" onClick={() => openLightboxOnSlide(index+1)}>
          <img src={`/images/product-detail-0${index + 1}.jpg`} alt="IMG-PRODUCT" />
        </div>
      </div>
    ))

  return (
    // < !--Product Detail-- >
    <section className="sec-product-detail bg0 p-t-65 p-b-60">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-7 p-b-30">
            <div className="p-l-25 p-r-30 p-lr-0-lg">
              <div className="wrap-slick3 flex-sb flex-w">
                <div className="slick3 gallery-lb">
                  <Carousel
                    showArrows={true}
                    autoPlay={true}
                    renderThumbs={renderCustomThumbs}
                    thumbWidth={100}
                    showIndicators={false}
                    infiniteLoop={true}
                    showStatus={false}
                  >
                    {slideDetail()}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>

          <BuyCondition />
        </div>

        <DetailInformation />
      </div>

      <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
        <span className="stext-107 cl6 p-lr-25">
          SKU: JAK-01
        </span>

        <span className="stext-107 cl6 p-lr-25">
          Categories: Jacket, Men
        </span>
      </div>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={productsImages}
        slide={lightboxController.slide}
      />
    </section>
  )
}

export default DetailProduct