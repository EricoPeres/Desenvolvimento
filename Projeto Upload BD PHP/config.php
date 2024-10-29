<?php

// Configuração de credenciais
$server = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'formula_arquivos';

// conexão com o banco de dados
$mysqli = new mysqli($server, $usuario, $senha, $banco);

// verificar conexão
if($mysqli->connect_error) {
    die("Falha ao se comunicar com banco de dados: ".$mysqli->connect_error);
}

?>