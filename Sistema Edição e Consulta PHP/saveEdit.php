<?php
    include_once('config.php');

    if(isset($_POST['update'])) {

        $id = $_POST['id'];
        $nome = $_POST['nome'];
        $sistema = $_POST['sistema'];
        $produtora = $_POST['produtora'];
        $genero = $_POST['genero'];
        $regiao = $_POST['regiao'];
        $descricao = $_POST['descricao'];
        
        print_r($descricao);

        $sqlUpdate = "UPDATE db_teste SET nome='$nome', sistema='$sistema', produtora='$produtora', genero='$genero', regiao='$regiao', descricao='$descricao' WHERE id='$id'";

        $result = $mysqli->query($sqlUpdate);
    }
    // echo "Update realizado"; //
    header('Location: consulta.php');
?>