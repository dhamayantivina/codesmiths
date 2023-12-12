import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

function SectionPolybag() {
  return (
    <div class="container">
      <div class="row" style={{ marginBottom: '20px',marginTop:'70px'}}>
        <div class="col">
          <img src="./public/panduan/image6.png" class='img-fluid float-left'></img>
        </div>
        <div class="col" style={{ marginBottom: '100px' }}>
          <h1 style={{ color: '#334B35', textAlign: 'center' }}>Polybag</h1>
          <p style={{ textAlign: 'justify' }}>Metode tanam polybag adalah suatu teknik bercocok tanam di mana tanaman 
          ditanam dalam wadah plastik berbentuk kantung atau polybag sebagai pengganti tanah. Wadah ini berfungsi sebagai 
          tempat tumbuh dan berkembangnya akar tanaman. Langkah-langkah metode tanam polybag melibatkan pemilihan polybag 
          yang sesuai ukuran dan materialnya, pengisian polybag dengan media tanam yang kaya nutrisi, penanaman bibit tanaman, 
          dan perawatan rutin seperti penyiraman, pemupukan, dan pemangkasan.Metode tanam polybag sering digunakan di lingkungan perkotaan, 
          di halaman rumah, atau di tempat-tempat dengan lahan terbatas untuk mendukung pertanian skala kecil atau hobi berkebun.</p>
          <p><FontAwesomeIcon icon={faSquareCheck} /> Pengolahan bibit yang mudah</p>
          <p><FontAwesomeIcon icon={faSquareCheck} /> kontrol yang baik terhadap kondisi tumbuh</p>
          <p><FontAwesomeIcon icon={faSquareCheck} /> kemampuan untuk memantau pertumbuhan akar</p>
        </div>
      </div>
    </div>
  );
}

export default SectionPolybag;
