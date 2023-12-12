import React from 'react'
import Navbar from '../components/Navbar'
import TextHero from '../components/home/TextHero'
import CardTanaman from '../components/home/CardTanaman'
import Batas from '../components/home/Batas'
import ArtikelCard from '../components/home/ArtikelCard'
import Footer from '../components/Footer'
import SecUrban from '../components/home/SecUrban'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div>
            <TextHero />
            <SecUrban />
            <CardTanaman />
            <Batas />
            <ArtikelCard />
            <Footer />
           
        </div>
    </div>
  )
}

export default Home