/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import BuyCondition from './BuyCondition';
import DetailInformation from './DetailInformation';

const DetailProduct = () => {
  const slideDetail = () =>
    [1, 2, 3].map((item,index) => (
      <div className="item-slick3" data-thumb={`/images/product-detail-0${item}.jpg`} key={item}>
        <div className="wrap-pic-w pos-relative">
          <img src={`/images/product-detail-0${item}.jpg`} alt="IMG-PRODUCT" />

          <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href={`/images/product-detail-0${item}.jpg`}>
            <i className="fa fa-expand"></i>
          </a>
        </div>
      </div>
    ))

    const renderCustomThumbs = () =>
    [1, 2, 3].map((item,index) => (
      <div className="item-slick3" data-thumb={`/images/product-detail-0${item}.jpg`} key={item}>
        <div className="wrap-pic-w pos-relative">
          <img src={`/images/product-detail-0${item}.jpg`} alt="IMG-PRODUCT" />
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
                    thumbWidth={130}
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
    </section>
  )
}

export default DetailProduct