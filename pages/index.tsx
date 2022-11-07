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
        {/* <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" defer></script> */}
      </Head>
      <Script src="/js/isotope.pkgd.min.js" type="module"></Script>
      <Script src="/js/function.js" type="module" ></Script>
      <Layout>
        <Slide />
        <Banner />
        <Products />
      </Layout>
    </>
  )
}

export default Home
