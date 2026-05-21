CREATE DATABASE dbDesatino;
USE dbDesatino;

CREATE TABLE usuario (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  dtNasc DATE,
  perfil VARCHAR(15) NOT NULL,
	CONSTRAINT chkPerfil
		CHECK (perfil IN ('ator', 'espectador', 'curioso')),
  email VARCHAR(50) NOT NULL UNIQUE,
  senha VARCHAR(20) NOT NULL
);

CREATE TABLE resultadoQuiz (
  idresultadoQuiz INT PRIMARY KEY AUTO_INCREMENT,
  resultado VARCHAR(45) NULL,
  fkUsuario INT NOT NULL,  
  CONSTRAINT fkResultadoUsuario
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE artigo (
  idArtigo INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(45) NOT NULL,
  conteudo VARCHAR(3000) NOT NULL,
  imagem VARCHAR(60) NULL,
  dtPublicacao DATE NOT NULL DEFAULT(CURRENT_DATE),
  categoria VARCHAR(45) NOT NULL
);

CREATE TABLE favoritos (
  idFavoritos INT PRIMARY KEY AUTO_INCREMENT,
  idUsuario INT NOT NULL,
  idArtigo INT NOT NULL,
  CONSTRAINT fkIdUsuarios
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
  CONSTRAINT fkIdArtigo
    FOREIGN KEY (idArtigo) REFERENCES artigo(idArtigo)
);


-- CRIANDO O ADM
INSERT INTO usuario (nome, dtNasc, perfil, email, senha) VALUES 
	('Camila Nefertite', '2008-01-25', 'ator', 'camila.cardoso@sptech.school', 'senha123');
    