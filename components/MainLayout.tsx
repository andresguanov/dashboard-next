import Header from '@components/Header'
import Nav from '@common/Nav'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => (
  <div className="min-h-full">
    <Header />
    <Nav />
    <main>
      <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  </div>
)

export default MainLayout
