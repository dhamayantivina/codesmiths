import React from 'react'
import Navbar from '../components/Navbar'
import SectionCard from '../components/panduan/SectionCard'
import SectionUrban from '../components/panduan/SectionUrban'
import SectionHidroponik from '../components/panduan/SectionHidroponik'
import CardHidroponik from '../components/panduan/CardHidroponik'
import SectionPolybag from '../components/panduan/SectionPolybag'
import CardPolybag from '../components/panduan/CardPolybag'
import Footer from '../components/Footer'


const Panduan = () => {
    return (
      <div>
          <Navbar />
          <div>
            <SectionCard />
            <SectionUrban />
            <SectionHidroponik />
            <CardHidroponik />
            <SectionPolybag />
            <CardPolybag />
            <Footer />
          </div>
      </div>
    )
  }
  
  export default Panduan