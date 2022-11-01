// eslint-disable-next-line @next/next/no-document-import-in-page
import { Head, Html } from 'next/document';
import Header from '../utils/Header'
import Footer from '../utils/Footer'

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}