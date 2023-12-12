import React from "react";
import Container from 'react-bootstrap/Container';

function SectionUrban() {
  const herostyle = {
    height: '720px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    gap: '20px', 
    padding: '0 20px', 
    textAlign: 'center',
  };

  const heroright = {
    display: 'flex',
    justifyContent: 'center',
  };

  const imagestyle = {
    width: '90%',
    maxHeight: '90%',
  };

  return (
    <div className="container" style={herostyle}>
      <div style={heroright}>
        <img src="./public/panduan/image4.png" alt="Urban Farming" style={imagestyle} />
      </div>
      <div>
        <h1 style={{ fontSize: '50px', color: '#334B35', textAlign:"center"}}> Metode</h1>
        <h3 style={{ fontSize: '50px', color: '#F7C35F' }} >Urban Farming</h3>
        <p style={{textAlign:'justify'}}>
        Berkebun perkotaan, atau urban farming, melibatkan sejumlah metode yang efisien dalam memanfaatkan ruang terbatas di lingkungan perkotaan. Salah satunya adalah tanaman vertikal, yang memungkinkan penanaman secara bertingkat pada dinding atau struktur. Rooftop farming memanfaatkan atap gedung untuk menanam sayuran atau buah-buahan, mengoptimalkan ruang terbuka yang sering tidak dimanfaatkan. Metode hidroponik dan akuaponik menghilangkan ketergantungan pada tanah, dengan memberikan nutrisi langsung melalui air atau menggunakan limbah ikan sebagai sumber nutrisi. Pertanian komunitas melibatkan partisipasi kelompok dalam pengelolaan kebun bersama, memperkuat ikatan sosial sekaligus menyediakan sumber pangan lokal. Pemanfaatan teknologi, seperti irigasi otomatis dan pemantauan pertumbuhan tanaman melalui sensor, juga menjadi bagian integral dari upaya meningkatkan produktivitas dan keberlanjutan dalam berkebun urban farming.
        </p>
      </div>
    </div>
  );
}

export default SectionUrban;
