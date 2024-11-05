<?php
include('config.php');

if(isset($_POST['email']) || isset($_POST['senha'])) {  //verificando se foi digitado email e senha

    if(strlen($_POST['email']) == 0) {
        echo "Preencha seu e-mail";
    } else if(strlen($_POST['senha']) == 0 ) {
        echo "Preencha sua senha";
    } else {

        $email = $mysqli->real_escape_string($_POST['email']); //evitando o SQL Invection
        $senha = $mysqli->real_escape_string($_POST['senha']); //evitando o SQL Invection

        $sql_code = " SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'"; //pegando os usuários e senhas da tabela usuarios
        $sql_query = $mysqli->query($sql_code) or die('Falha na execução do código SQL: ' . $mysqli->error);

        $quantidade = $sql_query->num_rows;

        if($quantidade == 1) {  //iniciando a seção com o usuário cadastrado

            $usuario = $sql_query->fetch_assoc();

            if(!isset($_SESSION)) {
                session_start();
            }

            $_SESSION['id'] = $usuario['id'];
            $_SESSION['name'] = $usuario['nome'];

            header("Location: painel.php"); //redirecionando para a página painel.php

        } else {
            echo "Falha ao logar! e-mail ou senha inválidos";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h1>Acesse sua Conta</h1>
    <form action="" method="POST"> 
        <p>
            <label for="">E-mail</label>
            <input type="text" name="email">
        </p>
        <p>
            <label for="">Senha</label>
            <input type="password" name="senha">
        </p>
        <p>
            <button type="submit">Entrar</button>
        </p>
    </form>
</body>
</html>