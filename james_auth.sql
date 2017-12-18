-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 18, 2017 at 06:43 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `james_auth`
--

-- --------------------------------------------------------

--
-- Table structure for table `hewans`
--

CREATE TABLE `hewans` (
  `id` int(11) NOT NULL,
  `nomor_eartag` varchar(255) NOT NULL,
  `jenis_hewan` varchar(255) NOT NULL,
  `spesies_hewan` varchar(255) DEFAULT NULL,
  `tanggal_lahir` int(11) DEFAULT NULL,
  `berat_badan` float DEFAULT NULL,
  `kesehatan_hewan` varchar(255) DEFAULT NULL,
  `status_kurban` varchar(255) DEFAULT NULL,
  `kandang` varchar(255) DEFAULT NULL,
  `induk_jantan` varchar(255) DEFAULT NULL,
  `induk_betina` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hewans`
--

INSERT INTO `hewans` (`id`, `nomor_eartag`, `jenis_hewan`, `spesies_hewan`, `tanggal_lahir`, `berat_badan`, `kesehatan_hewan`, `status_kurban`, `kandang`, `induk_jantan`, `induk_betina`, `createdAt`, `updatedAt`) VALUES
(1, '22', 'kambing', 'kambing', 12, 4, 'sehat', NULL, 'A', '', '', '2017-12-12 15:54:48', '2017-12-12 15:54:48'),
(5, '221', 'domba', 'australian_sheep', 1970, 5, 'sehat', NULL, 'B', NULL, NULL, '2017-12-13 16:02:37', '2017-12-13 16:02:37'),
(7, 'Dom812', 'domba', 'americano_sheep', 1970, 3, 'sehat', NULL, 'B', NULL, NULL, '2017-12-13 16:06:10', '2017-12-13 16:06:10'),
(8, 'Dom24', 'domba', 'americano_sheep', 1970, 4, 'sehat', NULL, 'B', NULL, NULL, '2017-12-13 16:06:46', '2017-12-13 16:06:46'),
(9, 'Dom772', 'domba', 'australian_sheep', 1970, 4, 'sehat', NULL, 'A', NULL, NULL, '2017-12-13 16:07:06', '2017-12-13 16:07:06'),
(10, 'Sap12', 'sapi', 'sapi_australian', 1970, 20, 'sehat', NULL, 'F', NULL, NULL, '2017-12-13 16:20:22', '2017-12-13 16:20:22'),
(12, '192', 'Kambing', 'kambing_jvan', 4, 12, NULL, NULL, NULL, NULL, NULL, '2017-12-14 06:04:18', '2017-12-14 06:04:18');

-- --------------------------------------------------------

--
-- Table structure for table `mengelola_pakan`
--

CREATE TABLE `mengelola_pakan` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_pakan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mengelola_ternak`
--

CREATE TABLE `mengelola_ternak` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_hewan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pakans`
--

CREATE TABLE `pakans` (
  `id` int(11) NOT NULL,
  `jenis_pakan` varchar(255) DEFAULT NULL,
  `nama_pakan` varchar(255) DEFAULT NULL,
  `jumlah_pakan` int(11) DEFAULT NULL,
  `kandungan` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pakans`
--

INSERT INTO `pakans` (`id`, `jenis_pakan`, `nama_pakan`, `jumlah_pakan`, `kandungan`, `createdAt`, `updatedAt`) VALUES
(1, 'Komposit', 'sintetik rumput', 100, 'Protein', '2017-12-12 14:45:55', '2017-12-12 14:45:55'),
(2, 'Komposikkkk', 'sintetik rumput', 100, 'Protein', '2017-12-13 09:09:24', '2017-12-13 09:09:24'),
(8, 'Konsentrat', 'Yoga', 12, 'code', '2017-12-13 10:28:17', '2017-12-13 10:28:17'),
(9, 'Konsentrat', 'DAvid', 15, 'daming', '2017-12-13 10:36:45', '2017-12-13 10:36:45'),
(10, 'Konsentrat', 'rakish', 16, 'lemak', '2017-12-13 10:41:09', '2017-12-13 10:41:09'),
(12, 'Konsentrat', 'aslam', 666, 'iiyi', '2017-12-13 10:49:30', '2017-12-13 10:49:30'),
(13, 'Konsentrat', 'ttre', 2133, '13123', '2017-12-13 16:07:59', '2017-12-13 16:07:59'),
(14, 'rumput', 'asdadw', 1231, 'ffe', '2017-12-13 16:15:55', '2017-12-13 16:15:55'),
(15, 'konsentrat', 'sadwd', 4241, 'sad', '2017-12-13 16:16:17', '2017-12-13 16:16:17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(11) DEFAULT '2',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'hiskAA', '$2a$10$O/DmEfwCd.P27sGoPCnUGeelCkM54NDTyVfpzjShnUeF5XScKNzJ.', 4, '2017-11-29 17:48:57', '2017-11-29 17:48:57'),
(2, 'user1', '$2a$10$sBmOwqTyp8CplN9Lfwb04euGkJU5xUClUEpLcuDIg.CphgotvzxMS', 2, '2017-11-29 18:01:31', '2017-11-29 18:01:31'),
(3, 'AIR', '$2a$10$c60fXaF75GHAIaeLOpLLpeLOmvJVcDCjs6aDed1u24d5q0BFF0OcC', 2, '2017-11-30 06:08:31', '2017-11-30 06:08:31'),
(4, 'test', '$2a$10$Yj0pT3Cu/5mva79.q86On.iopObhdeUATgLF5X01cMtpxsoXWtKkW', 2, '2017-11-30 07:20:11', '2017-11-30 07:20:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hewans`
--
ALTER TABLE `hewans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mengelola_pakan`
--
ALTER TABLE `mengelola_pakan`
  ADD PRIMARY KEY (`id_user`,`id_pakan`),
  ADD KEY `id_pakan` (`id_pakan`);

--
-- Indexes for table `mengelola_ternak`
--
ALTER TABLE `mengelola_ternak`
  ADD PRIMARY KEY (`id_user`,`id_hewan`),
  ADD KEY `id_hewan` (`id_hewan`);

--
-- Indexes for table `pakans`
--
ALTER TABLE `pakans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hewans`
--
ALTER TABLE `hewans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `pakans`
--
ALTER TABLE `pakans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `mengelola_pakan`
--
ALTER TABLE `mengelola_pakan`
  ADD CONSTRAINT `mengelola_pakan_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mengelola_pakan_ibfk_2` FOREIGN KEY (`id_pakan`) REFERENCES `pakans` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `mengelola_ternak`
--
ALTER TABLE `mengelola_ternak`
  ADD CONSTRAINT `mengelola_ternak_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mengelola_ternak_ibfk_2` FOREIGN KEY (`id_hewan`) REFERENCES `hewans` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
