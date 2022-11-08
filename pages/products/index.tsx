import Script from 'next/script';
import React from 'react';
import Layout from '../layout';
import Products from '../../components/products/products';

const ProductsPage = () => {
  return (
    <>
    <header  className="header-v4">
      <Layout>
        <Products />
      </Layout>
    </header>
    <Script src="/js/function.js" type="module" ></Script>
    </>
  )
}

export default ProductsPage

