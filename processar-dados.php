<?php
if(!empty($_GET['id']))
require_once 'config.php';

$id= $_GET['id'];
$sqlSelect = "SELECT * FROM cadastro WHERE id=$id";
$result = $smtp->query($sqlSelect);
print_r($result);

// Pegando os dados vindos do formulário
$nome = $_POST['nome'];
$sistema = $_POST['sistema'];
$produtora = $_POST['produtora'];
$genero = $_POST['genero'];
$regiao = $_POST['regiao'];
$descricao = $_POST['descricao'];
$fotos = $_FILES['path'];

if(isset($_FILES['path'])) {

    if($fotos['error'])
        die("Falha ao enviar o arquivo!!");

    if($fotos['size'] > 2097152)
        die('Arquivo muito grande !! Max: 2mb');

    $pasta = "upload/";
    $nomeDoArquivo = $fotos['name'];
    $novoNomeDoArquivo = uniqid(); //colocando a função que deixa o nome único
    $extensao = strtolower(pathinfo($nomeDoArquivo, PATHINFO_EXTENSION)); //Pegar a extensão dos arquivos sempre em minúsculo
    if ($extensao != "jpg" && $extensao != "png" && $extensao != "jpeg") //validação do tipo do arquivo
        die("Tipo de arquivo não aceito");

    $path = $pasta . $novoNomeDoArquivo . "." . $extensao;

    $deu_certo = move_uploaded_file($fotos['tmp_name'], $path);
    if ($deu_certo) {
        echo "Arquivo movido com sucesso";
    } else      
        echo "Erro na movida do arquivo";

}

// Preparar comando para tabela
$smtp = $conn->prepare("INSERT INTO cadastro (nome, sistema, produtora, genero, regiao, descricao, path) VALUES (?,?,?,?,?,?,?)");
$smtp->bind_param("sssssss",$nome, $sistema, $produtora, $genero, $regiao, $descricao, $path);

// Se executar corretamente
if($smtp->execute()){
    echo "Mensagem enviada com sucesso!";
}else{
    echo "Erro no envio da mensagem: ".$smtp->error;
}

$smtp->close();
$conn->close();

?>