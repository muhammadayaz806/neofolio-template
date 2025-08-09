import Sidebar from './Sidebar'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <main className="main-content-inner">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout

