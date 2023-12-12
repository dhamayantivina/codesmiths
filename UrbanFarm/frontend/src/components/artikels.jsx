import React, { useState, useEffect } from 'react';

const artikels = () => {
  const [articleData, setArticleData] = useState({
    kode: '',
    judul: '',
    url_gambar: '',
    url_sumber: '',
    tanggal_publikasi: ''
  });

  useEffect(() => {
    fetch('/artikel') 
      .then(response => response.json())
      .then(data => setArticleData(data[0])) 
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <div className="row" style={{ marginBottom: '100px' }}>
        <div className="col">
          <img src={articleData.url_gambar} className='img-fluid float-left' style={{ width: '480px' }} alt="Article" />
        </div>
        <div className="col" style={{ marginTop: '50px' }}>
          <h3>{articleData.judul}</h3>
          <p style={{ textAlign: 'justify' }}>{articleData.url_sumber}</p>
          <h5>{articleData.tanggal_publikasi}</h5>
          <button style={buttonStyle}>Baca Selengkapnya</button>
        </div>
      </div>
    </div>
  );
};

export default artikels;
