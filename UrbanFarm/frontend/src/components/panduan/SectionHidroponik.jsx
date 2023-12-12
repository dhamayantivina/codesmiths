import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

function SectionHidroponik() {
  return (
    <div class="container">
      <div class="row" style={{ marginBottom: '20px' }}>
        <div class="col" style={{ marginBottom: '100px' }}>
          <h1 style={{ color: '#334B35', textAlign: 'center' }}>Hidroponik</h1>
          <p style={{ textAlign: 'justify' }}>Hidroponik adalah suatu metode bercocok tanam tanpa menggunakan tanah 
          sebagai media pertumbuhan tanaman. Sebagai gantinya, tanaman ditanam dalam larutan nutrisi yang kaya akan 
          unsur-unsur esensial seperti nitrogen, fosfor, dan kalium. Sistem hidroponik memungkinkan kontrol yang lebih 
          akurat terhadap nutrisi yang diterima oleh tanaman, sehingga pertumbuhan tanaman dapat dioptimalkan. 
          Ada beberapa sistem hidroponik yang umum digunakan, termasuk sistem sumbu (wick system), sistem rakit (floating system), 
          sistem irigasi tetes (drip system), dan banyak lagi.</p>
          <p><FontAwesomeIcon icon={faSquareCheck} /> Pertumbuhan tanaman yang cepat</p>
          <p><FontAwesomeIcon icon={faSquareCheck} /> Pemanfaatan ruang yang efisien</p>
          <p><FontAwesomeIcon icon={faSquareCheck} /> Hasil Produksi yang tinggi</p>
          <p><FontAwesomeIcon icon={faSquareCheck} /> Cocok untuk lokasi terbatas</p>
        </div>
        <div class="col">
          <img src="./public/panduan/image5.png" class='img-fluid float-left'></img>
        </div>
      </div>
    </div>
  )
}

export default SectionHidroponik
