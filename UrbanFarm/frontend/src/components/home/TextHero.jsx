import React from 'react';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';


function Hero() {
  const containerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'left',
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
    textAlign: 'left',
    marginLeft: '3rem',
    color: '#fff', 
  };
  const buttonStyle = {
    backgroundColor: '#F7C35F', 
    height : '69px' , 
    width:'219px', 
    color: '#000', 
    borderRadius: '8px', 
    padding: '10px 20px', 
    fontSize: '26px', 
    fontWeight: 'bold', 
    border: 'none', 
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    cursor: 'pointer', 
  };

  return (
    <div style={containerStyle}>
      <Image src="./public/beranda/image1.png" fluid style={imageStyle} />

      
      <div style={textContainerStyle}>
        <h1 style={{ fontSize: '65px',color:"#F7C35F" }}>Selamat Datang<img src="./public/beranda/daun.png" /></h1>
        <p style={{ fontSize: '65px' }}>Di Website Kami</p>
        <p style={{ fontSize: '20px' }}>Memberikan panduan berkebun dilahan yang minim <br/>dengan Metode Hidroponik dan Polybag</p>
        <div className='d-flex gap-5'>
          <Button  style={buttonStyle}>Mulai</Button> 
          <a href="/">
            <img src='./public/beranda/playstore.png' alt="Play Store" />
          </a>
        </div>


      </div>
    </div>
  );
}

export default Hero;
