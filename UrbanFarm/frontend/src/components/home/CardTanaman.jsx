import React from 'react';
import FarmCard from '../FarmCard'; 

const FarmPage = () => {
  const farms = [
    {
      imageSrc: './public/beranda/card h1.png', 
      description: 'Menanam Bawang dengan metode Hidroponik.',
    },
    {
      imageSrc: './public/beranda/card h2.png', 
      description: 'Menanam Cabe Rawit dengan Metode Polybag.',
    },
    {
      imageSrc: './public/beranda/card h3.png', 
      description: 'Menanam Buncis dengan Metode Polybag.',
    },
    {
      imageSrc: './public/panduan/card p3.png', 
      description: 'Menanam Tomat dengan Metode Polybag.',
    },
   
  ];
  const containerStyle = {
    textAlign : 'center',
    
  }

  return (
    <div style={{textAlign:'center'}}>
      <h3 style={{marginBottom:"2rem"}}>Rekomendasi Tanaman</h3>
      <h6 style={{marginBottom:"2rem"}}>Tentukan pilihan tanaman anda dan dapatkan informasi panduan tata cara menanamnya</h6>
      <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'center', textAlign:'left'}}>
        {farms.map((farm, index) => (
          <FarmCard
            key={index}
            title={farm.title}
            imageSrc={farm.imageSrc}
            description={farm.description}
            onClick={() => handleCardClick(farm.title)} 
          />
        ))}
      </div>
    </div>
  );
};

export default FarmPage;
