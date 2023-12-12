-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 12, 2023 at 06:46 AM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `urbanfarm`
--

-- --------------------------------------------------------

--
-- Table structure for table `artikel_berita`
--

CREATE TABLE `artikel_berita` (
  `id` int(3) NOT NULL,
  `kd` int(11) NOT NULL,
  `judul` varchar(225) NOT NULL,
  `konten` text NOT NULL,
  `url_gambar` varchar(255) NOT NULL,
  `url_sumber` varchar(255) NOT NULL,
  `tanggal_pulikasi` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `artikel_berita`
--

INSERT INTO `artikel_berita` (`id`, `kd`, `judul`, `konten`, `url_gambar`, `url_sumber`, `tanggal_pulikasi`) VALUES
(1, 200, '291 Rumah Tangga di Riau Melakukan Urban Farming', 'Asep Riyadi juga menambahkan bahwa masyarakat perkotaan menyediakan produk pertanian sendiri pada lahan terbatas dengan berbagai cara. Yang sebagian besarnya menggunakan media tanam pot atau polybag, sehingga mudah dipindahkan pada lahan sempit (baik di dalam ruangan atau di atap rumah). sebagai bagian dari gaya hidup yang berkelanjutan', 'https://mediacenter.riau.go.id/foto_berita/medium/291-rumah-tangga-di-riau-melakukan.jpg', 'https://mediacenter.riau.go.id/read/82674/291-rumah-tangga-di-riau-melakukan-urban-farm.html', '2023-12-04');

-- --------------------------------------------------------

--
-- Table structure for table `artikel_card`
--

CREATE TABLE `artikel_card` (
  `id` int(11) NOT NULL,
  `kode` int(8) NOT NULL,
  `judul` varchar(225) NOT NULL,
  `url_gambar` varchar(255) NOT NULL,
  `url_sumber` varchar(255) NOT NULL,
  `tanggal_publikasi` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `artikel_card`
--

INSERT INTO `artikel_card` (`id`, `kode`, `judul`, `url_gambar`, `url_sumber`, `tanggal_publikasi`) VALUES
(1, 101, 'Minta Warga Tak Panik, Pemkot Semarang Pastikan Harga Cabai Masih Terkendali', 'https://media.suara.com/pictures/653x366/2022/03/03/87313-ilustrasi-cabai-deflasi-051-persen-terjadi-di-balikpapan-ini-penyebabnya-antara.webp', 'https://jateng.suara.com/read/2023/11/05/160000/minta-warga-tak-panik-pemkot-semarang-pastikan-harga-cabai-masih-terkendali', '2023-11-05'),
(2, 102, 'Kitchen Garden Pertama di Medan, Wujud Kolaborasi Hotel Dukung Urban Farming', 'https://cdn1-production-images-kly.akamaized.net/wdThusBlIAbwF62AkYN3hUdSvwQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4644428/original/025237900_1699679111-WhatsApp_Image_2023-11-10_at_16.57.57.jpeg', 'https://www.liputan6.com/regional/read/5450478/kitchen-garden-pertama-di-medan-wujud-kolaborasi-hotel-dukung-urban-farming', '2023-11-11'),
(3, 103, 'Bertani di Lahan Sempit, Intip Kisah BRInita di Jayapura', 'https://akcdn.detik.net.id/visual/2023/10/26/bri_169.jpeg?w=715&q=90', 'https://www.cnbcindonesia.com/news/20231026194411-4-484073/bertani-di-lahan-sempit-intip-kisah-brinita-di-jayapura', '2023-10-26'),
(4, 104, 'Kisah Inspiratif, Urban Farming Jadi Gaya Baru Bertani Pada Lahan Sempit', 'https://img.okezone.com/content/2023/10/28/455/2909903/kisah-inspirasi-brinita-urban-farming-jadi-gaya-baru-bertani-pada-lahan-sempit-eMWmvtpYmp.jpg', 'https://economy.okezone.com/read/2023/10/28/455/2909903/kisah-inspirasi-brinita-urban-farming-jadi-gaya-baru-bertani-pada-lahan-sempit', '2023-10-28'),
(5, 105, 'Diminta Heru Budi \"Hijaukan\" Jakarta, Dinas KPKP Gelar Festifal Urban Farming', 'https://asset.kompas.com/crops/JizmuSGhOr6SnxMxau5bd_PzwmY=/0x0:0x0/1200x800/data/photo/2023/10/30/653f8ba6084c9.jpg', 'https://megapolitan.kompas.com/read/2023/10/30/18585301/diminta-heru-budi-hijaukan-jakarta-dinas-kpkp-gelar-festival-urban', '2023-11-30'),
(6, 106, '5 Hal yang Perlu Diperhatikan Sebelum Memulai Urban Farming', 'https://asset.kompas.com/crops/d-b8v9b4-WZwZUeDwWAbTAbFWB8=/0x0:1000x667/750x500/data/photo/2022/06/26/62b84043f215b.jpg', 'https://umkm.kompas.com/read/2023/08/18/190000383/5-hal-yang-perlu-diperhatikan-sebelum-memulai-urban-farming-vertikultur-', '2023-08-18'),
(7, 107, 'Bappenas Urban Farming Alternatif Jaga Ketahanan Pangan Berkelanjutan', 'https://static.republika.co.id/uploads/images/inpicture_slide/011573800-1674189411-830-556.jpg', 'https://ekonomi.republika.co.id/berita/rz20bp370/bappenas-urban-farming-alternatif-jaga-ketahanan-pangan-berkelanjutan', '2023-08-08'),
(8, 108, 'Urban Farming Solusi Bertani di Lahan Sempit dan Padat', 'https://pict-a.sindonews.net/dyn/732/pena/news/2023/09/15/768/1202485/urban-farming-solusi-bertani-di-lahan-sempit-dan-padat-penduduk-weq.jpg', 'https://sains.sindonews.com/read/1202485/768/urban-farming-solusi-bertani-di-lahan-sempit-dan-padat-penduduk-1694794198', '2023-09-12'),
(9, 109, 'Dukung Green Building, ASDP Luncurkan Program Berkebun Hidroponik', 'https://akcdn.detik.net.id/community/media/visual/2023/07/08/asdp-berkebun-hidroponik.jpeg?w=700&q=90', 'https://news.detik.com/berita/d-6812590/dukung-green-building-asdp-luncurkan-program-berkebun-hidroponik', '2023-07-08'),
(10, 110, 'Maksimalkan Lahan Rawa, BRI Dukung Pemberdayaan Urban Farming di Surabaya', 'https://akcdn.detik.net.id/community/media/visual/2023/11/09/bri-peduli-urban-farming-surabaya-1_169.jpeg?w=700&q=90', 'https://www.detik.com/jatim/bisnis/d-7028577/maksimalkan-lahan-rawa-bri-dukung-pemberdayaan-urban-farming-di-surabaya', '2023-11-09'),
(11, 111, 'Keren! Tempat Pembuangan Sampah Di Sulap Jadi Urban Farming', 'https://akcdn.detik.net.id/community/media/visual/2023/06/12/keren-tempat-pembuangan-sampah-disulap-jadi-urban-farming_169.jpeg?w=700&q=90', 'https://news.detik.com/foto-news/d-6768279/keren-tempat-pembuangan-sampah-disulap-jadi-urban-farming', '2023-06-13'),
(12, 112, 'Yuk Belajar Atasi Hama Urban Farming', 'https://akcdn.detik.net.id/community/media/visual/2023/03/09/yuk-belajar-mengatasi-hama-urban-farming-4_169.jpeg?w=700&q=90', 'https://www.detik.com/edu/foto/d-6609369/yuk-belajar-atasi-hama-urban-farming/5', '2023-03-09'),
(13, 113, 'Lokasi Pembuangan Lahan Sampah Diubah jadi Urban Farming', 'https://cdn.medcom.id/dynamic/content/2023/12/07/1638127/O0LhCdRyJx.jpg?w=1024', 'https://www.medcom.id/nasional/metro/Rb1YV7lb-lokasi-pembuangan-lahan-sampah-diubah-jadi-urban-farming', '2023-12-07'),
(14, 114, 'Lokasi Pembuangan Lahan Sampah Diubah jadi Urban Farming', 'https://cdn.medcom.id/dynamic/content/2023/12/07/1638127/O0LhCdRyJx.jpg?w=1024', 'https://www.medcom.id/nasional/metro/Rb1YV7lb-lokasi-pembuangan-lahan-sampah-diubah-jadi-urban-farming', '2023-12-07'),
(15, 115, 'Lokasi Pembuangan Lahan Sampah Diubah jadi Urban Farming', 'https://cdn.medcom.id/dynamic/content/2023/12/07/1638127/O0LhCdRyJx.jpg?w=1024', 'https://www.medcom.id/nasional/metro/Rb1YV7lb-lokasi-pembuangan-lahan-sampah-diubah-jadi-urban-farming', '2023-12-07'),
(16, 116, 'bdjgeeyveyvtde', 'ghsgdhsdsu', 'bshvxduceuidyci', '2023-12-09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artikel_berita`
--
ALTER TABLE `artikel_berita`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kd` (`kd`);

--
-- Indexes for table `artikel_card`
--
ALTER TABLE `artikel_card`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kode_2` (`kode`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artikel_berita`
--
ALTER TABLE `artikel_berita`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `artikel_card`
--
ALTER TABLE `artikel_card`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
