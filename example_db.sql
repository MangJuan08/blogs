-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Lug 21, 2023 alle 13:24
-- Versione del server: 10.4.28-MariaDB
-- Versione PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `example_db`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `comments`
--

CREATE TABLE `comments` (
  `idcomment` int(11) NOT NULL,
  `commentText` varchar(150) NOT NULL,
  `fkidpost` int(11) NOT NULL,
  `fkiduser` int(11) NOT NULL,
  `datetime_posted` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `comments`
--

INSERT INTO `comments` (`idcomment`, `commentText`, `fkidpost`, `fkiduser`, `datetime_posted`) VALUES
(7, 'Amazing Blog Here', 2, 1, '2023-06-07 17:19:25.000000'),
(13, 'Hello guys what\'s your opinion?', 2, 1, '2023-06-08 19:41:22.000000'),
(14, 'Hey guys', 2, 1, '2023-06-08 19:41:25.000000'),
(15, 'new comment for this post', 3, 1, '2023-06-08 19:46:38.000000');

-- --------------------------------------------------------

--
-- Struttura della tabella `login_details`
--

CREATE TABLE `login_details` (
  `idLog` int(11) NOT NULL,
  `dateLogin` date NOT NULL,
  `fkiduser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `posts`
--

CREATE TABLE `posts` (
  `idpost` int(11) NOT NULL,
  `post_titolo` varchar(1000) NOT NULL,
  `post_corpo` varchar(1000) NOT NULL,
  `post_date` date NOT NULL,
  `post_iduser` int(11) NOT NULL,
  `category_post` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `posts`
--

INSERT INTO `posts` (`idpost`, `post_titolo`, `post_corpo`, `post_date`, `post_iduser`, `category_post`) VALUES
(1, 'AMAZING!!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q', '2023-05-28', 1, 'COMPUTER SCIENCE'),
(2, 'HEY JOHN', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', '2023-05-30', 1, 'HISTORY'),
(3, 'THIS BLOG IS AMAZING', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q', '2023-05-14', 1, ''),
(4, 'JOHN', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q', '2023-05-24', 2, ''),
(5, 'AA', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q', '2023-05-09', 2, ''),
(6, 'JOHN', 'PROVA', '2023-05-27', 2, '');

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `userType` varchar(45) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `cognome` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`idUser`, `username`, `password`, `userType`, `nome`, `cognome`) VALUES
(1, 'juan', 'juan', 'admin', 'aa', 'aa'),
(2, 'mica', 'mica', 'user', '', '');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`idcomment`),
  ADD KEY `fkdiuser` (`fkiduser`),
  ADD KEY `fkidpost` (`fkidpost`);

--
-- Indici per le tabelle `login_details`
--
ALTER TABLE `login_details`
  ADD PRIMARY KEY (`idLog`),
  ADD KEY `fkiduser` (`fkiduser`);

--
-- Indici per le tabelle `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`idpost`),
  ADD KEY `post_iduser` (`post_iduser`);

--
-- Indici per le tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `comments`
--
ALTER TABLE `comments`
  MODIFY `idcomment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT per la tabella `login_details`
--
ALTER TABLE `login_details`
  MODIFY `idLog` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `posts`
--
ALTER TABLE `posts`
  MODIFY `idpost` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT per la tabella `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`fkiduser`) REFERENCES `users` (`iduser`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`fkidpost`) REFERENCES `posts` (`idpost`);

--
-- Limiti per la tabella `login_details`
--
ALTER TABLE `login_details`
  ADD CONSTRAINT `login_details_ibfk_1` FOREIGN KEY (`fkiduser`) REFERENCES `users` (`idUser`);

--
-- Limiti per la tabella `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`post_iduser`) REFERENCES `users` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
