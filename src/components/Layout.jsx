import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <main className="main-content-inner">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout

