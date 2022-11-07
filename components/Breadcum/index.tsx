/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'

type Props = {
  breadcumInfo: { itemType: string | string[] | undefined, id: string | string[] | undefined }
}

const BreadCum = ({ breadcumInfo }: Props) => {
  return (
    <>
      {/* <!-- breadcrumb --> */}
      <div className="container">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <a href="/" className="stext-109 cl8 hov-cl1 trans-04">
            Home
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
          </a>

          <a href="/products" className="stext-109 cl8 hov-cl1 trans-04">
            {breadcumInfo.itemType}
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
          </a>

          <span className="stext-109 cl4">
            {breadcumInfo.id}
          </span>
        </div>
      </div>
    </>
  )
}

export default BreadCum;
