CREATE DATABASE IF NOT EXISTS `restaurante`;
USE `restaurante`;

CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL,
  `nombre_usuario` varchar(255) NOT NULL,
  `nombre_apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `direccion_envio` varchar(255) NOT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `esAdministrador` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;