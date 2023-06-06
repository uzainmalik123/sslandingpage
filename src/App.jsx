import './App.css'

import { Navbar } from './components'
import { Footer, Header, Reviews, Section } from './containers'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Section />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
