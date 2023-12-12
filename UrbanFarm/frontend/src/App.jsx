import React from 'react'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Panduan from './pages/Panduan'
import Artikel from './pages/Artikel'
import TentangKami from './pages/TentangKami'
import Detail from './pages/Detail'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tentangkami" element={<TentangKami/>} />
        <Route path="/panduan" element={<Panduan/>} />
        <Route path="/artikel" element={<Artikel/>} />
        <Route path="/bawangmerah" element={<Detail/>} />
      </Routes>
    </Router>
  )
}

export default App