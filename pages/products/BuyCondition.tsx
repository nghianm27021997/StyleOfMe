import React from 'react'
import { Select } from 'antd';

const BuyCondition = () => {
  return (
    <div className="col-md-6 col-lg-5 p-b-30">
      <div className="p-r-50 p-t-5 p-lr-0-lg">
        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
          Lightweight Jacket
        </h4>

        <span className="mtext-106 cl2">
          $58.79
        </span>

        <p className="stext-102 cl3 p-t-23">
          Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
        </p>

        {/* <!--  --> */}
        <div className="p-t-33">
          <div className="flex-w flex-r-m p-b-10">
            <div className="size-203 flex-c-m respon6">
              Size
            </div>

            <div className="size-204 respon6-next">
              <div className="rs1-select2 bg0">
                <Select
                  defaultValue="default"
                  style={{ width: '100%', height: "45px" }}
                  allowClear
                  options={[
                    {
                      value: 'default',
                      label: 'Choose an option',
                    },
                    {
                      value: 'S',
                      label: 'Size S',
                    },
                    {
                      value: 'M',
                      label: 'Size M',
                    },
                    {
                      value: 'L',
                      label: 'Size L',
                    },
                    {
                      value: 'XL',
                      label: 'Size XL',
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="flex-w flex-r-m p-b-10">
            <div className="size-203 flex-c-m respon6">
              Color
            </div>

            <div className="size-204 respon6-next">
              <div className="rs1-select2 bg0">
                <Select
                  defaultValue="default"
                  style={{ width: '100%', height: "45px" }}
                  allowClear
                  options={[
                    {
                      value: 'default',
                      label: 'Choose an option',
                    },
                    {
                      value: 'red',
                      label: 'Red',
                    },
                    {
                      value: 'blue',
                      label: 'Blue',
                    },
                    {
                      value: 'white',
                      label: 'White',
                    },
                    {
                      value: 'gray',
                      label: 'Grey',
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="flex-w flex-r-m p-b-10">
            <div className="size-204 flex-w flex-m respon6-next">
              <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                  <i className="fs-16 zmdi zmdi-minus"></i>
                </div>

                <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value="1" />

                <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                  <i className="fs-16 zmdi zmdi-plus"></i>
                </div>
              </div>

              <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* <!--  --> */}
        <div className="flex-w flex-m p-l-100 p-t-40 respon7">
          <div className="flex-m bor9 p-r-10 m-r-11">
            <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
              <i className="zmdi zmdi-favorite"></i>
            </a>
          </div>

          <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
            <i className="fa fa-facebook"></i>
          </a>

          <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
            <i className="fa fa-twitter"></i>
          </a>

          <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
            <i className="fa fa-google-plus"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BuyCondition;