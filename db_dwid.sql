-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2020 at 03:35 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_dwid`
--

-- --------------------------------------------------------

--
-- Table structure for table `brand_tb`
--

CREATE TABLE `brand_tb` (
  `id` int(99) NOT NULL,
  `name` varchar(99) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brand_tb`
--

INSERT INTO `brand_tb` (`id`, `name`) VALUES
(1, 'Honda'),
(2, 'Yamaha'),
(3, 'Kawasaki'),
(4, 'Suzuki'),
(5, 'Happy');

-- --------------------------------------------------------

--
-- Table structure for table `customer_tb`
--

CREATE TABLE `customer_tb` (
  `id` int(99) NOT NULL,
  `name` varchar(99) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_tb`
--

INSERT INTO `customer_tb` (`id`, `name`, `address`, `phone`) VALUES
(1, 'Bambang', 'Jl. Meruya', '+628145698745'),
(2, 'Rozaq', 'Jl. Mujaer', '+62835478642'),
(3, 'Ahmad', 'Jl. In aja dulu', '+628124789642'),
(4, 'Ayu', 'Jl. Mahakam', '08123478965');

-- --------------------------------------------------------

--
-- Table structure for table `motorcycle_tb`
--

CREATE TABLE `motorcycle_tb` (
  `id` int(99) NOT NULL,
  `name` varchar(99) DEFAULT NULL,
  `brand_id` int(99) DEFAULT NULL,
  `image` varchar(99) DEFAULT NULL,
  `color` varchar(25) DEFAULT NULL,
  `specification` varchar(250) DEFAULT NULL,
  `stock` int(99) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `motorcycle_tb`
--

INSERT INTO `motorcycle_tb` (`id`, `name`, `brand_id`, `image`, `color`, `specification`, `stock`) VALUES
(1, 'Ninja 250R FI', 3, 'ninja250rFI.jpg', 'Hijau Hitam', '2 silinder 250 cc, EFI, ABS', 30),
(2, 'Ninja 250SL FI', 3, 'ninja250slFI.jpg', 'Hijau Hitam', '1 silinder 250 cc, EFI, ABS', 30),
(3, 'KLX 250', 3, 'klx250.jpg', 'Hijau Hitam', '1 silinder 250 cc', 10),
(4, 'KLX 150', 3, 'klx150.jpg', 'Hitam', '1 silinder 150 cc', 50),
(5, 'CBR 150R', 1, 'cbr150r.jpg', 'Hitam', '1 silinder 150 cc', 50),
(6, 'CBR 250RR', 1, 'cbr250rr.jpg', 'Orange Repsol', '2 silinder 250 cc, EFI ABS', 50),
(7, 'Beat', 1, 'beat.jpg', 'Merah Hitam', '1 silinder 110 cc, EFI', 100),
(8, 'Beat Street', 1, 'beatstreet.jpg', 'Merah Hitam', '1 silinder 110 cc, EFI', 100),
(9, 'N-Max', 2, 'nmax.jpg', 'silver', '1 silinder 150 cc, EFI, ABS', 10),
(10, 'X-Max', 2, 'xmax.jpg', 'silver', '1 silinder 250 cc, EFI, ABS', 20),
(11, 'Aerox', 2, 'aerox.jpg', 'hitam kuning', '1 silinder 150 cc, EFI', 20),
(12, 'GSX-R150', 4, 'gsxR150.jpg', 'Biru GP', '1 silinder 150 cc, EFI', 70),
(13, 'GSR-R150', 4, 'gsrR150.jpg', 'Biru GP', '1 silinder 150 cc, EFI', 70),
(14, 'A', 1, '123.jpg', 'Hitam', NULL, 10);

-- --------------------------------------------------------

--
-- Table structure for table `transaction_tb`
--

CREATE TABLE `transaction_tb` (
  `id` int(99) NOT NULL,
  `customer_id` int(99) DEFAULT NULL,
  `motor_brand` varchar(99) DEFAULT NULL,
  `motor_nama` varchar(99) DEFAULT NULL,
  `motor_warna` varchar(25) DEFAULT NULL,
  `unit` int(99) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaction_tb`
--

INSERT INTO `transaction_tb` (`id`, `customer_id`, `motor_brand`, `motor_nama`, `motor_warna`, `unit`) VALUES
(1, 1, '1', 'Beat', 'Merah Hitam', 10),
(2, 2, '2', 'X-Max', 'Silver', 5),
(3, 3, '4', 'GSX-R150', 'Biru GP', 2),
(4, 1, '3', 'Ninja 250R FI', 'Hijau Hitam', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brand_tb`
--
ALTER TABLE `brand_tb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_tb`
--
ALTER TABLE `customer_tb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `motorcycle_tb`
--
ALTER TABLE `motorcycle_tb`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `transaction_tb`
--
ALTER TABLE `transaction_tb`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brand_tb`
--
ALTER TABLE `brand_tb`
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `customer_tb`
--
ALTER TABLE `customer_tb`
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `motorcycle_tb`
--
ALTER TABLE `motorcycle_tb`
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `transaction_tb`
--
ALTER TABLE `transaction_tb`
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `motorcycle_tb`
--
ALTER TABLE `motorcycle_tb`
  ADD CONSTRAINT `motorcycle_tb_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand_tb` (`id`);

--
-- Constraints for table `transaction_tb`
--
ALTER TABLE `transaction_tb`
  ADD CONSTRAINT `transaction_tb_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer_tb` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
