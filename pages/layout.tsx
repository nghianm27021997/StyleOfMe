import Header from '../utils/Header'

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}