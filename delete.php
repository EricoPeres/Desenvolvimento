<?php
    if(!empty($_GET['id'])) {
    require_once 'config.php';

        $id= $_GET['id'];
        $sqlSelect = "SELECT * FROM db_teste WHERE id=$id";
        $result = $mysqli->query($sqlSelect);
        if($result->num_rows > 0){

            $sqlDelete = "DELETE FROM db_teste WHERE id=$id";
            $resultDelete = $mysqli->query($sqlDelete);
        }
    } 
header('Location: consulta.php');
?>