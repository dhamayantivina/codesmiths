import React from 'react';
import detailpanduan from '../detail/detailpanduan.css';
// // import '@fortawesome/fontawesome-free/css/all.css';

const DetailPanduan = () => {
    return (
        <div>
            <div className="hero-banner">
                <img className="hero-image" src="./public/detail/bawangmerah.jpg" alt="Hero Image" />
                <div className="hero-text">
                    <h1>Menanam Bawang Merah dengan Metode Hidroponik</h1>
                    <p>Menanam bawang merah di rumah, direkomendasikan menggunakan metode hidroponik karena
                        bawang merah mudah dibudidayakan. Anda dapat menggunakan umbi atau biji sebagai bibit, dan
                        metode ini lebih efisien dalam penggunaan lahan. </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '20px' }}>
                <div className="row g-2">
                    <div className="col-md-3">
                        <img className="w-100 rounded img-container" src="./public/detail/bmerah1.png" alt="hidroponik bawang merah" />
                    </div>
                    <div className="col-md-3">
                        <img className="w-100 rounded img-container" src="./public/detail/bmerah2.png" alt="hidroponik bawang merah" />
                    </div>
                    <div className="col-md-3">
                        <img className="w-100 rounded img-container" src="./public/detail/bmerah3.png" alt="hidroponik bawang merah" />
                    </div>
                    <div className="col-md-3">
                        <img className="w-100 rounded img-container" src="./public/detail/bmerah4.png" alt="hidroponik bawang merah" />
                    </div>
                </div>
            </div>

            <div className="tanam" style={{ padding: '5rem 2rem' }}>
                <h1>Cara menanam Bawang Merah Hidroponik</h1>
                <ol>
                    <li>Persiapkan metode tanam</li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <div className="no-urut">1</div>
                                <img src="./public/detail/hp-step1.png" className="card-img-top" alt="step 1" />
                                <div className="card-body">
                                    <p className="card-text">
                                        Siapkan pipa dengan diameter 3 inch dan panjang yang disesuaikan dengan kebutuhan. Lalu buat lubang tanam dengan jarak antar lubang sekitar 20 cm. Pastikan lubang tanam sesuai dengan diameter netpot.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="no-urut">2</div>
                                <img src="./public/detail/hp-step2.png" className="card-img-top" alt="step 2" />
                                <div className="card-body">
                                    <p className="card-text">
                                        Potong kain flanel yang berfungsi sebagai filter seukuran dengan netpot. Setelah semua siap, pasang media tanam arang sekam di dalam netpot.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <li>Proses penanaman bawang merah</li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src="./public/detail/hpt-step1.jpg" className="card-img-top" alt="step tanam 1" />
                                <div className="no-urut">1</div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Bibit bawang merah dari sisa bawang merah yang ada di dapur. Bawang merah yang bisa digunakan adalah yang berbiji tunggal dan masih segar.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="./public/detail/hpt-step2.png" className="card-img-top" alt="step tanam 2" />
                                <div className="no-urut">2</div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Potong ujung bawang merah, lalu tancapkan bawang merah ke dalam media tanam sedalam separuh dari bawang merah.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="./public/detail/hpt-step3.png" className="card-img-top" alt="step tanam 3" />
                                <div className="no-urut">3</div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Taruh netpot yang sudah ditanam benih bawang merah ke lubang lubang pada pipa.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="./public/detail/hpt-step4.png" className="card-img-top" alt="step tanam 4" />
                                <div className="no-urut">4</div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Isi pipa dengan air nutrisi dan letakkan pipa di tempat yang mendapatkan sinar matahari cukup namun tidak terlalu panas. Isi pipa dengan air nutrisi dan letakkan pipa di tempat yang mendapatkan sinar matahari cukup namun tidak terlalu panas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ol>
            </div>

            <div className="rawat" style={{ padding: '5rem 2rem' }}>
                <h1>Perawatan Bawang Merah Hidroponik</h1>
                <ul>
                    <li>Hal-hal yang harus Anda perhatikan dalam perawatan bawang merah hidroponik </li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <div className="rawat-step"><i className="fa-solid fa-droplet" style={{ color: '#ffffff' }}></i> Pemberian Nutrisi</div>
                                <img src="./public/detail/rawat1.png" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                        Pemberian air nutrisi dilakukan saat air pada pipa mulai menyusut atau berkurang. Nutrisi untuk bawang merah hidroponik terbuat dari pupuk NPK phonska + sempurna daun sebanyak 1 sendok yang dicampurkan dalam 1 ember air.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="rawat-step"><i className="fa-solid fa-flask" style={{ color: '#ffffff' }}></i> Pemupukan Susulan</div>
                                <img src="./public/detail/rawat2.png" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                        Untuk menjaga agar bawang merah tidak membusuk, pastikan hanya kain flanel yang terkena air. Beri pupuk yang dimasukkan ke dalam air di pipa dengan tujuan agar nutrisi yang diserap cukup baik.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="rawat-step"><i className="fa-solid fa-seedling" style={{ color: '#ffffff' }}></i> Panen</div>
                                <img src="./public/detail/rawat3.png" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                        Bawang merah yang ditanam menggunakan sistem hidroponik bisa dipanen saat berumur 2,5 bulan setelah tanam. Jumlah umbi yang bisa dipanen antara 5 hingga 10 umbi per netpot.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>

            <div className="kendali">
                <h1>Pengendalian hama pada Hidroponik</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div style={{ display: 'flex' }}>
                            <img src="./public/detail/kendali1.png" alt="ulat" style={{ height: '100%', maxHeight: '100%', width: 'auto' }} />

                            <div style={{ marginLeft: '10px' }}>
                                <h3>Ulat</h3>
                                <div>
                                    <p>Kerusakan pada tanaman yang disebabkan oleh ulat biasanya berupa lubang pada bagian daun.</p>
                                    <p>Cara Mengatasinya</p>
                                    <ul>
                                        <li>Buang bagian daun yang sudah rusak dan berlubang karena dimakan ulat</li>
                                        <li>Tanamlah tanaman inang untuk mengalihkan hama dari tanaman hidroponik seperti kenikir</li>
                                        <li>Menyemprot langsung dengan menggunakan obat pemberantas hama pada waktu malam hari</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div style={{ display: 'flex' }}>
                            <img src="./public/detail/kendali2.png" alt="Tungau" style={{ height: '100%', maxHeight: '100%', width: 'auto' }} />

                            <div style={{ marginLeft: '10px' }}>
                                <h3>Tungau</h3>
                                <div>
                                    <p>Tungau bisa menyerang bagian bawah daun tanaman hidroponik. Gejala serangannya mula-mula muncul bercak-bercak kecil pada daun. Kemudian, daun tanaman hidroponik akan menguning lalu gugur.</p>
                                    <span>Cara mengatasinya:</span>
                                    <ul>
                                        <li>Kumpulkan daun yang terserang, kemudian bakar</li>
                                        <li>Untuk menghindari serangan menyebar, segera buang tanaman hidroponik terserang tungau</li>
                                        <li>Menanam tanaman hidroponik di dalam green house</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div style={{ display: 'flex' }}>
                            <img src="./public/detail/kendali3.png" alt="Hama Kutu" style={{ height: '100%', maxHeight: '100%', width: 'auto' }} />

                            <div style={{ marginLeft: '10px' }}>
                                <h3>Hama Kutu</h3>
                                <div>
                                    <p>Biasanya hama kutu akan menyebabkan tanaman menjadi cacat. Selain cacat, kutu akan membuat tanaman menjadi kerdil, batang lemah, daun menjadi keriting, dan menggulung.</p>
                                    <span>Cara mengatasinya:</span>
                                    <p>Hama ini bisa dilakukan dengan cara memusnahkan semua tanaman hidroponik yang telah terinfeksi oleh hama. Hal ini dilakukan untuk mencegah penyebarannya.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div style={{ display: 'flex' }}>
                            <img src="./public/detail/kendali4.png" alt="Belalang" style={{ height: '100%', maxHeight: '100%', width: 'auto' }} />

                            <div style={{ marginLeft: '10px' }}>
                                <h3>Belalang</h3>
                                <div>
                                    <p>Belalang menjadi jenis hama tanaman yang sangat menganggu bagi tanaman hidroponik, sebab belalang biasanya akan menyerang tanaman secara bergerombol sehingga membuat petani merasa kewalahan.</p>
                                    <span>Cara mengatasinya:</span>
                                    <ul>
                                        <li>Menggunakan musuh alami belalang, seperti laba-laba lalat perampok sampai kodok. Selain itu, tanamlah jenis tanaman bunga matahari, aster, dan lain-lain di dekat tanaman hidroponik</li>
                                        <li>Buatlah area tanaman hidroponik yang ramah burung. Hal ini dilakukan karena burung seperti alap-alap dan lark menjadi predator yang akan memakan belalang dalam jumlah besar.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="alat-bahan">
                <h1><i className="fa-solid fa-wrench"></i>Alat dan Bahan</h1>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                                <div className="card-body">
                                    <h4 className="card-title">Pipa</h4>
                                    <img className="card-img-top" src="./public/detail/alat1.png" alt="Pipa" />
                                    <hr />
                                    <a href="#" className="btn btn-default">Beli online</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35' }}>
                                <div className="card-body">
                                    <h4 className="card-title">Netpot</h4>
                                    <img className="card-img-top" src="./public/detail/alat2.png" alt="Netpot" />
                                    <hr />
                                    <a href="#" className="btn btn-default">Beli online</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35' }}>
                                <div className="card-body">
                                    <h4 className="card-title">Pupuk NPK</h4>
                                    <img className="card-img-top" src="./public/detail/bahan1.png" alt="Pupuk" />
                                    <hr />
                                    <a href="#" className="btn btn-default">Beli online</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35' }}>
                                <div className="card-body">
                                    <h4 className="card-title">Sempurna daun</h4>
                                    <img className="card-img-top" src="./public/detail/bahan2.png" alt="daun" />
                                    <hr />
                                    <a href="#" className="btn btn-default">Beli online</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPanduan;
