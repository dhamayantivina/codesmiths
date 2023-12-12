import React from 'react';
import FarmCard from '../FarmCard'; 

const FarmPage = () => {
  const farms = [
    {
      imageSrc: './public/panduan/card p1.png', 
      description: 'Menanam Bawang dengan metode Polybag.',
    },
    {
      imageSrc: './public/panduan/card p2.png', 
      description: 'Menanam Kembang kol dengan Metode Polybag.',
    },
    {
      imageSrc: './public/panduan/card p3.png', 
      description: 'Menanam Tomat dengan Metode Polybag.',
    },
    {
      imageSrc: './public/panduan/card p4.png', 
      description: 'Menanam Mentimun dengan Metode Polybag.',
    },
   
  ];
  const containerStyle = {
    textAlign : 'center',
    
  }

  return (
    <div style={{textAlign:'center', backgroundColor: '#F9E69E',}}>
      <h3 style={{marginBottom:"2rem"}}>Tanaman yang mudah ditanam dengan </h3>
      <h3 style={{marginBottom:"2rem"}}> Metode Polybag </h3>
      <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'center', textAlign:'left'}}>
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
