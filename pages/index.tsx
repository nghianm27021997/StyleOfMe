import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './layout'
import Sectionone from '../components/Home/sectionone'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Sectionone />
      </Layout></>
  )
}

export default Home
