import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


function Artikelimage() {
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
    
      return (
        <Container fluid="md-0">
        <div style={containerStyle}>
          <Image src="./public/artikel/Background.jpg" fluid style={imageStyle} />
          
          <div style={textContainerStyle}>
            <h1 style={{ fontSize: '40px', color:"#F7C35F" }}>Temukan Artikel - Artikel dan Berita - Berita</h1>
            <p style={{ fontSize: '30px' }}>Menarik Seputar Urban Farming</p>
            <p style={{ fontSize: '20px' }}>Jangan sampai terlewatkan beritanya</p>
          </div>
        </div>
        </Container>
      );
    }

export default Artikelimage;
