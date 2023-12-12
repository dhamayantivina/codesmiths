import React from 'react';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';

function SectionCard() {
  const containerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: '3rem 0',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '100%',
  };

  const textContainerStyle = {
    position: 'absolute',
    textAlign: 'center',
    marginLeft: '3rem',
    marginBotton: '100rem',
    color: '#fff', 
  };

  const buttonContainerStyle = {
    position: 'absolute',
    top: '18rem',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    width: '100%',
  };

  const buttonStyle = {
    backgroundColor: '#334B35', 
    height: '150px', 
    width: '150px', 
    color: '#fff', 
    borderRadius: '8px', 
    padding: '10px 20px', 
    fontSize: '12px', 
    fontWeight: 'bold',
    border: 'none', 
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    cursor: 'pointer', 
  };

  return (
    <div style={containerStyle}>
      <Image src="./public/panduan/image card1.png" fluid style={imageStyle} />
      
      <div style={textContainerStyle}>
        <h1 style={{ fontSize: '40px', color:"#F7C35F" }}>Mari Menanam Dilahan yang Minim</h1>
        <p style={{ fontSize: '30px' }}>Temukan Metode menanam yang Efektif</p>
        <p style={{ fontSize: '20px' }}>Ingin Menanam Menggunakan Metode Apa?</p>
        
        <div style={buttonContainerStyle} className='d-flex justify-content-center gap-5'>
          <Button style={buttonStyle}><img src="./public/panduan/cardH.png" alt="" />Hidroponik</Button> 
          <Button style={buttonStyle}><img src="./public/panduan/cardP.png" alt="" />Polybag</Button>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
