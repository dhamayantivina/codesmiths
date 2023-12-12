import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/artikel/Cards'
import Artikelimage from '../components/artikel/Artikelimg'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Artikelimage />
            <Cards />
            <Footer />
           
        </div>
    </div>
  )
}

export default Home