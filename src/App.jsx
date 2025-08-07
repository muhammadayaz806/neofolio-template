import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import SelectedWork from './components/SelectedWork'
import './App.css'

function App() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <HeroSection />
        <SelectedWork />
      </div>
    </Layout>
  )
}

export default App

