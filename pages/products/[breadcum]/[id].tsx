/* eslint-disable @next/next/no-sync-scripts */
import { defaultConfig } from 'next/dist/server/config-shared'
import { useRouter } from 'next/router'
import Script from 'next/script';
import React from 'react'
import BreadCum from '../../../components/Breadcum';
import Layout from '../../layout';
import DetailProduct from '../DetailProduct';

export const ProductDetail = () => {
  const router = useRouter();

  const breadcumInfo = {
    itemType: router.query.breadcum,
    id: router.query.id
  }

  return (
    <>
      <header className="header-v4">
        <Layout>
          {/* breadcum */}
          <BreadCum breadcumInfo={breadcumInfo}></BreadCum>

          {/* detail item */}
          <DetailProduct />
        </Layout>
      </header>
      <Script src="/js/jquery-3-5.1.min.js" type="module" ></Script>
      <Script src="/js/function.js" type="module" ></Script>
      <Script src="/js/select2/select2.js" type="module"></Script>
      <Script src="/js/select2/select2.min.js" type="module"></Script>
      <Script src="/js/isotope.pkgd.min.js" type="module"></Script>
    </>
  )
}

export default ProductDetail;
