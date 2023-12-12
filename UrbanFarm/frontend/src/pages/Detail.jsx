import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DetailPanduan from '../components/detail/DetailPanduan'

const Detail = () => {
  return (
    <div>
        <Navbar />
        <div>
            <DetailPanduan />
            <Footer />
           
        </div>
    </div>
  )
}

export default Detail