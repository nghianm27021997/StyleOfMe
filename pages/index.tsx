import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './layout'
import Slide from '../components/Home/slide/slide'
import Banner from '../components/Home/Banner'
import Script from 'next/script';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Code For Life</title>
        <meta name="description" content="Code For Life"></meta>
      </Head>
        <Script src="/js/function.js" strategy="lazyOnload" async type="module" ></Script>
        <Script src="/js/slick.js" strategy="lazyOnload" async type="module" ></Script>
      <Layout>
        <Slide />
        <Banner />
      </Layout></>
  )
}

export default Home
