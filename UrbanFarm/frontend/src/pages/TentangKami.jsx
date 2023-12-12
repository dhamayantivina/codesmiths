import React from 'react'
import SecTentang from '../components/about/Sectentang'
import SecWeb from '../components/about/Secweb'
import SecMobile from '../components/about/Secmobile'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CardBar from '../components/about/Cardbar'
import CardTeam from '../components/about/CardTeam'


const TentangKami = () => {
    return (
      <div>
        <Navbar />
        <div>
        <CardBar />
        <SecTentang />
        <CardTeam />
        <SecWeb />
        <SecMobile />
        <Footer />
        </div>
     </div>
  )
}

export default TentangKami  