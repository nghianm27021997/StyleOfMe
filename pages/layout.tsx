// eslint-disable-next-line @next/next/no-document-import-in-page
import { Head, Html } from 'next/document';
import Header from '../utils/Header'

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}