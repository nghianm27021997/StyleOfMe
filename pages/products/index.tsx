import Script from 'next/script';
import React from 'react';
import Layout from '../layout';
import Products from '../../components/products/products';

const ProductsPage = () => {
  return (
    <>
    <Script src="/js/function.js" type="module"></Script>
    <header  className="header-v4">
      <Layout>
        <Products />
      </Layout>
    </header>
    </>
  )
}

export default ProductsPage

