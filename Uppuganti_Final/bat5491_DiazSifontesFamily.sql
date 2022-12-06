-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 12, 2022 at 04:41 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bat5491_DiazSifontesFamily`
--

-- --------------------------------------------------------

--
-- Table structure for table `AncestorDetails`
--

CREATE TABLE `AncestorDetails` (
  `ancestorId` int(11) NOT NULL,
  `ancestorName` varchar(40) NOT NULL,
  `dob` date NOT NULL,
  `isAlive` int(1) NOT NULL,
  `children` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `AncestorDetails`
--

INSERT INTO `AncestorDetails` (`ancestorId`, `ancestorName`, `dob`, `isAlive`, `children`) VALUES
(1, 'Melchor', '1943-05-15', 1, 4),
(2, 'Goyo', '1950-03-05', 1, 5),
(3, 'Chico', '1946-10-15', 0, 2),
(4, 'Marcelina', '1947-06-05', 1, 7),
(5, 'Mencha', '1946-03-16', 1, 3),
(6, 'Raimunda', '1942-01-01', 0, 9),
(7, 'Arcadio', '1943-05-15', 0, 8),
(8, 'Agapito', '1941-06-12', 1, 4),
(9, 'Pedro', '1945-05-12', 0, 5),
(10, 'Eulalia', '1948-02-27', 1, 6),
(11, 'Cleto', '1942-03-18', 1, 7),
(12, 'Evarista', '1945-02-17', 1, 10),
(13, 'Juana', '1949-11-05', 0, 4),
(14, 'Justina', '1944-11-15', 0, 3);

-- --------------------------------------------------------

--
-- Table structure for table `AncestorProperties`
--

CREATE TABLE `AncestorProperties` (
  `propertyId` bigint(100) NOT NULL,
  `ancestorId` int(11) NOT NULL,
  `propertyName` varchar(40) NOT NULL,
  `propertyArea` float NOT NULL,
  `propertyValue` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `AncestorProperties`
--

INSERT INTO `AncestorProperties` (`propertyId`, `ancestorId`, `propertyName`, `propertyArea`, `propertyValue`) VALUES
(100, 1, 'carocuesta', 11000, 330000),
(102, 1, 'guaramita', 15000, 525000),
(103, 1, 'el cascajo', 3000, 75000),
(104, 1, 'matasiete', 130000, 2600000),
(105, 1, 'boqueron', 10000, 400000),
(106, 2, 'carocuesta', 5000, 150000),
(107, 2, 'guaramita', 18000, 630000),
(108, 2, 'el cascajo', 2000, 50000),
(109, 2, 'matasiete', 170000, 3400000),
(110, 2, 'boqueron', 70000, 280000),
(111, 3, 'carocuesta', 6000, 18000),
(112, 3, 'guaramita', 28000, 980000),
(113, 3, 'el cascajo', 2000, 50000),
(114, 3, 'matasiete', 243000, 4860000),
(115, 3, 'boqueron', 9000, 360000),
(116, 4, 'carocuesta', 4000, 120000),
(117, 4, 'guaramita', 17000, 595000),
(118, 4, 'el cascajo', 2000, 50000),
(119, 4, 'matasiete', 187000, 3740000),
(120, 4, 'boqueron', 70000, 280000),
(121, 5, 'carocuesta', 3000, 90000),
(122, 5, 'guaramita', 8000, 280000),
(123, 5, 'el cascajo', 3000, 75000),
(124, 5, 'matasiete', 320000, 6400000),
(125, 5, 'boqueron', 4000, 160000),
(126, 6, 'carocuesta', 5000, 150000),
(127, 6, 'guaramita', 10000, 350000),
(128, 6, 'el cascajo', 2000, 50000),
(129, 6, 'matasiete', 330000, 6600000),
(130, 6, 'boqueron', 6000, 240000),
(131, 7, 'carocuesta', 7000, 210000),
(132, 7, 'guaramita', 16000, 560000),
(133, 7, 'el cascajo', 4000, 100000),
(134, 7, 'matasiete', 270000, 5400000),
(135, 7, 'boqueron', 8000, 320000),
(136, 8, 'carocuesta', 11000, 330000),
(137, 8, 'guaramita', 18000, 630000),
(138, 8, 'el cascajo', 3000, 75000),
(139, 8, 'matasiete', 350000, 7000000),
(140, 8, 'boqueron', 4000, 160000),
(141, 9, 'carocuesta', 18000, 540000),
(142, 9, 'guaramita', 20000, 700000),
(143, 9, 'el cascajo', 2000, 50000),
(144, 9, 'matasiete', 380000, 7600000),
(145, 9, 'boqueron', 7000, 280000),
(146, 10, 'carocuesta', 7000, 210000),
(147, 10, 'guaramita', 19000, 665000),
(148, 10, 'el cascajo', 2000, 50000),
(149, 10, 'matasiete', 460000, 9200000),
(150, 10, 'boqueron', 50000, 200000),
(151, 11, 'carocuesta', 3000, 90000),
(152, 11, 'guaramita', 18000, 630000),
(153, 11, 'el cascajo', 2000, 50000),
(154, 11, 'matasiete', 320000, 6400000),
(155, 11, 'boqueron', 5000, 200000),
(156, 12, 'carocuesta', 4000, 120000),
(157, 12, 'guaramita', 9000, 315000),
(158, 12, 'el cascajo', 2000, 50000),
(159, 12, 'matasiete', 340000, 6800000),
(160, 12, 'boqueron', 6000, 240000),
(161, 13, 'carocuesta', 4000, 120000),
(162, 13, 'guaramita', 8000, 280000),
(163, 13, 'el cascajo', 2000, 50000),
(164, 13, 'matasiete', 250000, 5000000),
(165, 13, 'boqueron', 8000, 320000),
(166, 14, 'carocuesta', 2000, 60000),
(167, 14, 'guaramita', 6000, 210000),
(168, 14, 'el cascajo', 3000, 75000),
(169, 14, 'matasiete', 250000, 5000000),
(170, 14, 'boqueron', 9000, 360000);

-- --------------------------------------------------------

--
-- Table structure for table `Business`
--

CREATE TABLE `Business` (
  `bId` bigint(200) NOT NULL,
  `property` varchar(40) NOT NULL,
  `userId` int(11) NOT NULL,
  `businessType` varchar(40) NOT NULL,
  `details` varchar(1024) DEFAULT NULL,
  `actionTaken` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Business`
--

INSERT INTO `Business` (`bId`, `property`, `userId`, `businessType`, `details`, `actionTaken`) VALUES
(19, 'snjdnj', 2, 'agriculture', 'sjdcnadsj', 1),
(20, 'Samba', 19, 'agriculture', 'Hello woirld', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Contactus`
--

CREATE TABLE `Contactus` (
  `contactusId` int(11) NOT NULL,
  `email` varchar(40) NOT NULL,
  `name` varchar(50) NOT NULL,
  `subject` varchar(40) NOT NULL,
  `description` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Contactus`
--

INSERT INTO `Contactus` (`contactusId`, `email`, `name`, `subject`, `description`) VALUES
(1, 'manikanta.aditya5@gmail.com', 'hbdc', 'ndcnsdjh', 'bdjkbdkjbkefjbkjbkjdbk'),
(2, 'manikanta.aditya5@gmail.com', 'hbdc', 'ndcnsdjh', 'bdjkbdkjbkefjbkjbkjdbk'),
(3, 'manikanta.aditya5@gmail.com', 'hbdc', 'ndcnsdjh', 'bdjkbdkjbkefjbkjbkjdbk'),
(4, 'manikanta.aditya5@gmail.com', 'hbdc', 'ndcnsdjh', 'bdjkbdkjbkefjbkjbkjdbk'),
(5, 'manikanta.aditya5@gmail.com', 'hbdc', 'ndcnsdjh', 'bdjkbdkjbkefjbkjbkjdbk'),
(6, 'bat5491@mavs.uta.edu', 'dajfhj', 'hasjfhadjd', 'hjewqjd'),
(7, 'bat5491@mavs.uta.edu', 'jdhfj', 'jhsajhdaj', 'hw');

-- --------------------------------------------------------

--
-- Table structure for table `FamilyGroup`
--

CREATE TABLE `FamilyGroup` (
  `groupId` int(11) NOT NULL,
  `groupname` varchar(1024) NOT NULL,
  `members` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `FamilyGroup`
--

INSERT INTO `FamilyGroup` (`groupId`, `groupname`, `members`) VALUES
(1, '0', ''),
(2, '0', ''),
(3, '0', ''),
(4, '0', ''),
(5, '0', ''),
(6, '0', ''),
(7, '0', ''),
(8, '0', 'adi'),
(9, '', ''),
(10, '', ''),
(11, '', ''),
(12, '', ''),
(13, '', ''),
(14, '', ''),
(15, '', ''),
(16, 'radha', ''),
(17, '', ''),
(18, 'radha', ''),
(19, '', ''),
(20, 'radha', 'adi'),
(21, 'Mozambique', 'Radha');

-- --------------------------------------------------------

--
-- Table structure for table `Trails`
--

CREATE TABLE `Trails` (
  `trailId` bigint(30) NOT NULL,
  `accuserId` int(11) NOT NULL,
  `accusedId` int(11) NOT NULL,
  `description` varchar(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Trails`
--

INSERT INTO `Trails` (`trailId`, `accuserId`, `accusedId`, `description`) VALUES
(27, 2, 16, 'dmsdn'),
(28, 2, 16, 'dmsdn'),
(30, 2, 16, 'finaltest'),
(31, 19, 18, 'Sample');

-- --------------------------------------------------------

--
-- Table structure for table `UserDetails`
--

CREATE TABLE `UserDetails` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(40) NOT NULL,
  `lastName` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `gender` varchar(40) NOT NULL,
  `ancestor` int(11) NOT NULL,
  `relation` varchar(40) NOT NULL,
  `contact` varchar(40) NOT NULL,
  `isActive` int(1) NOT NULL DEFAULT '0',
  `expenses` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `UserDetails`
--

INSERT INTO `UserDetails` (`userId`, `firstName`, `lastName`, `email`, `password`, `gender`, `ancestor`, `relation`, `contact`, `isActive`, `expenses`) VALUES
(1, 'admin', 'admin', 'admin@dsf.com', '$2y$15$gWmInPckh0lzZjnCQoOBBuBzIbNgBqHjbN2ZgiqWO8ZmSVvfNHDLO', 'male', 6, 'sibling', '682-358-7338', 1, NULL),
(19, 'Azure', 'Mozambique', 'azure.m@gmail.com', '$2y$15$NyiasjXSsaHbpYn2.DgxmOmsuMtSPwrJLRJCH/4ztSf8EGlt0uGHW', 'male', 2, 'sibling', '123-456-7890', 0, NULL),
(17, 'Mani', 'Aditya', 'mani.aditya@com.com', '$2y$15$gYKrdoshw2XD9VHnkHf73OjD1/CDYMNgMZ/9fshYVy3kYq89y66zO', 'male', 2, 'cousin', '123-456-7890', 0, NULL),
(2, 'Radha', 'Uppuganti', 'radha.uppuganti@gmail.com', '$2y$15$XVcn5SNuQHhmHnHAh3drWeqG47HTowK89K43.DV843Gv7DHXojlhq', 'male', 6, 'sibling', '682-358-7338', 1, NULL),
(18, 'Rambo', 'Rodrigues', 'rambo.r@gmail.com', '$2y$15$8TH0GPK5ONbweZlr6MrnbecGMeFC6/bVnmlayHvtTRGfCaohxPKzO', 'male', 6, 'cousin', '682-358-7338', 0, NULL),
(16, 'Test', 'Test', 'test@test.com', '$2y$15$o6vkPXz4VTe31EV7L4AEfuMhM5Ua0hwN47/xNQolOpGGBRHdZI6Rm', 'male', 10, 'aunt', '123-456-7890', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `UserProperties`
--

CREATE TABLE `UserProperties` (
  `userPropertyId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `area` float NOT NULL,
  `details` varchar(2048) NOT NULL,
  `location` varchar(40) NOT NULL,
  `relationWithLand` varchar(40) NOT NULL,
  `actionTaken` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `UserProperties`
--

INSERT INTO `UserProperties` (`userPropertyId`, `userId`, `area`, `details`, `location`, `relationWithLand`, `actionTaken`) VALUES
(4, 2, 2000, '', 'cara', 'industrial', 1),
(6, 2, 1003, '', 'carae', 'industrial', 2),
(8, 2, 100, '', 'el', 'industrial', 2),
(9, 19, 1200, '', 'Mozara', 'industrial', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AncestorDetails`
--
ALTER TABLE `AncestorDetails`
  ADD PRIMARY KEY (`ancestorId`);

--
-- Indexes for table `AncestorProperties`
--
ALTER TABLE `AncestorProperties`
  ADD PRIMARY KEY (`propertyId`),
  ADD KEY `ancestorId` (`ancestorId`);

--
-- Indexes for table `Business`
--
ALTER TABLE `Business`
  ADD PRIMARY KEY (`bId`);

--
-- Indexes for table `Contactus`
--
ALTER TABLE `Contactus`
  ADD PRIMARY KEY (`contactusId`);

--
-- Indexes for table `FamilyGroup`
--
ALTER TABLE `FamilyGroup`
  ADD PRIMARY KEY (`groupId`);

--
-- Indexes for table `Trails`
--
ALTER TABLE `Trails`
  ADD PRIMARY KEY (`trailId`),
  ADD KEY `accusedId` (`accusedId`),
  ADD KEY `accuserId` (`accuserId`);

--
-- Indexes for table `UserDetails`
--
ALTER TABLE `UserDetails`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `userId` (`userId`),
  ADD KEY `ancestor` (`ancestor`);

--
-- Indexes for table `UserProperties`
--
ALTER TABLE `UserProperties`
  ADD PRIMARY KEY (`userPropertyId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `AncestorDetails`
--
ALTER TABLE `AncestorDetails`
  MODIFY `ancestorId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `AncestorProperties`
--
ALTER TABLE `AncestorProperties`
  MODIFY `propertyId` bigint(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=171;

--
-- AUTO_INCREMENT for table `Business`
--
ALTER TABLE `Business`
  MODIFY `bId` bigint(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `Contactus`
--
ALTER TABLE `Contactus`
  MODIFY `contactusId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `FamilyGroup`
--
ALTER TABLE `FamilyGroup`
  MODIFY `groupId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `Trails`
--
ALTER TABLE `Trails`
  MODIFY `trailId` bigint(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `UserDetails`
--
ALTER TABLE `UserDetails`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `UserProperties`
--
ALTER TABLE `UserProperties`
  MODIFY `userPropertyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `AncestorProperties`
--
ALTER TABLE `AncestorProperties`
  ADD CONSTRAINT `ancestorproperties_ibfk_1` FOREIGN KEY (`ancestorId`) REFERENCES `AncestorDetails` (`ancestorId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Trails`
--
ALTER TABLE `Trails`
  ADD CONSTRAINT `trails_ibfk_2` FOREIGN KEY (`accusedId`) REFERENCES `UserDetails` (`userId`),
  ADD CONSTRAINT `trails_ibfk_3` FOREIGN KEY (`accuserId`) REFERENCES `UserDetails` (`userId`);

--
-- Constraints for table `UserDetails`
--
ALTER TABLE `UserDetails`
  ADD CONSTRAINT `userdetails_ibfk_1` FOREIGN KEY (`ancestor`) REFERENCES `AncestorDetails` (`ancestorId`);

--
-- Constraints for table `UserProperties`
--
ALTER TABLE `UserProperties`
  ADD CONSTRAINT `userproperties_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `UserDetails` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
