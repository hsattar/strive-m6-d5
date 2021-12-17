import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetails from './components/ProductDetails'

require('dotenv')
function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:productId' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
