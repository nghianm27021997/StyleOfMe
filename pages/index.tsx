/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './layout'
import Slide from '../components/Home/slide/slide'
import Banner from '../components/Home/Banner'
import Script from 'next/script';
import Products from '../components/products/products'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Code For Life</title>
        <meta name="description" content="Code For Life"></meta>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Layout>
        <Slide />
        <Banner />
        <Products />
      </Layout>
      <Script src="/js/jquery-3-5.1.min.js" type="module" ></Script>
      <Script src="/js/function.js" type="module" ></Script>
      <Script src="/js/select2/select2.js" type="module"></Script>
      <Script src="/js/select2/select2.min.js" type="module"></Script>
      <Script src="/js/isotope.pkgd.min.js" type="module"></Script>
    </>
  )
}

export default Home
