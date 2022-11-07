import { defaultConfig } from 'next/dist/server/config-shared'
import { useRouter } from 'next/router'
import React from 'react'
import BreadCum from '../../../components/Breadcum';
import Layout from '../../layout';

export const ProductDetail = () => {
  const router = useRouter();

  const breadcumInfo = {
    itemType: router.query.breadcum,
    id: router.query.id
  }

  return (
    <header className="header-v4">
      <Layout>
        <BreadCum breadcumInfo={breadcumInfo}></BreadCum>
      </Layout>
    </header>
  )
}

export default ProductDetail;
