<?php
if(!empty($_GET['id']))
require_once 'config.php';

$id= $_GET['id'];
$sqlSelect = "SELECT * FROM db_teste WHERE id=$id";
$result = $mysqli->query($sqlSelect);
if($result->num_rows > 0){

    while($user_data = mysqli_fetch_assoc($result)) {

        $nome = $user_data['nome']; // pegando os dados da base de dados
        $sistema = $user_data['sistema'];
        $produtora = $user_data['produtora'];
        $genero = $user_data['genero'];
        $regiao = $user_data['regiao'];
        $descricao = $user_data['descricao'];
    }
    
} else {
    header('Location: consulta.php');
}

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro Jogos Físicos</title>
<!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="css/styles.css">
<!-- Script -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>    
</head>
<body background="img/imagens8.jpg">
    <form class="container" id="nav-form" action="saveEdit.php" method="POST" enctype="multipart/form-data">
        <label class="form-titulo" for="nome">Nome do Jogo: </label>
            <input class="form-control" type="text" name="nome" placeholder="Nome:" aria-label=".form-control-lg example" value="<?php echo $nome ?>"required>
        <div class="formularios">        
            <select class="form-select" aria-label="Default select example" name="sistema">
                <option selected=><?php echo $sistema ?></option>
                <option value="Outros">.(Outros)</option>
                <option value="Dreamcast">Dreamcast</option>
                <option value="GameCube">GameCube</option>
                <option value="Master System">Master System</option>
                <option value="Mega_CD Sega_CD">Mega CD (Sega CD)</option>
                <option value="Mega Drive Genesis">Mega Drive (Genesis)</option>
                <option value="Neo Geo AES">Neo Geo AES</option>
                <option value="Neo Geo CD">Neo Geo CD</option>
                <option value="Neo Geo MVS">Neo Geo MVS</option>
                <option value="NES Famicom">NES (Famicom)</option>
                <option value="Nintendo 64">Nintendo 64</option>
                <option value="PC Engine_HuCARD">PC Engine (HuCARD)</option>
                <option value="PC Engine CD">PC Engine CD</option>
                <option value="Playstation 1">Playstation 1</option>
                <option value="Playstation 2">Playstation 2</option>
                <option value="Playstation 3">Playstation 3</option>
                <option value="Playstation 4">Playstation 4</option>
                <option value="Playstation 5">Playstation 5</option>
                <option value="Saturn">Saturn</option>
                <option value="Sega 32X">Sega 32X</option>
                <option value="Super Nintendo Super Famicom">Super Nintendo (Super Famicom)</option>
                <option value="Wii">Wii</option>
                <option value="Xbox">Xbox (Clássico)</option>
                <option value="Xbox 360">Xbox 360</option>
                <option value="Xbox One">Xbox One</option>
                <option value="Xbox Series S/X">Xbox Series S/X</option>
            </select><br>
            <select class="form-select" aria-label="Default select example" name="produtora">
                <option selected><?php echo $produtora ?></option>
                <option value="Outros">.(Outros)</option>
                <option value="Activision">Activision</option>
                <option value="Alpha Denshi (ADK)">Alpha Denshi (ADK)</option>
                <option value="Atlus">Atlus</option>
                <option value="Bluepoint Games">Bluepoint Games</option>
                <option value="Capcom">Capcom</option>
                <option value="CD Projekt Red">CD Projekt Red</option>
                <option value="CRI CSK Research Institute">CRI CSK Research Institute</option>
                <option value="Data East">Data East</option>
                <option value="EA Sports">EA Sports</option>
                <option value="Eletronic Arts">Eletronic Arts</option>
                <option value="Eolith_Playmore">Eolith, Playmore</option>
                <option value="Game Arts">Game Arts</option>
                <option value="Hudson Soft">Hudson Soft</option>
                <option value="Irem">Irem</option>
                <option value="Konami">Konami</option>
                <option value="Laser Soft">Laser Soft</option>
                <option value="Microsoft Game Studios">Microsoft Game Studios</option>
                <option value="Nazca Corporation">Nazca Corporation</option>
                <option value="Nichibutsu">Nichibutsu</option>
                <option value="Nintendo">Nintendo</option>
                <option value="Ubisoft">Ubisoft</option>
                <option value="PlayStation Studios">PlayStation Studios</option>
                <option value="Polyphony Digital">Polyphony Digital</option>
                <option value="Rockstar">Rockstar</option>
                <option value="Sega">Sega</option>
                <option value="SNK">SNK</option>
                <option value="Technōs Japan Corp">Technōs Japan Corp</option>
                <option value="Victor">Victor</option>
                <option value="Video System">Video System</option>
                <option value="Visco">Visco</option>
            </select><br>
            <select class="form-select" aria-label="Default select example" name="genero">
                <option selected><?php echo $genero ?></option>
                <option value="Outros">.(Outros)</option>
                <option value="Action-Adventure">Action-Adventure</option>
                <option value="Beat 'em up">Beat 'em up</option>
                <option value="Board game">Board game</option>
                <option value="Fighting">Fighting</option>
                <option value="First Person Shooter">First Person Shooter</option>
                <option value="Hack and Slash">Hack and Slash</option>
                <option value="Plataforma">Platform (2D e 3D)</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Racing">Racing</option>
                <option value="RPG">RPG</option>
                <option value="Run and gun">Run and gun</option>
                <option value="Shoot 'em up">Shoot 'em up</option>
                <option value="Sports">Sports</option>
                <option value="Strategy">Strategy</option>
                <option value="Survival Horror">Survival Horror</option>            
            </select><br>
        </div>
        <label class="form-titulo">Região: </label>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="regiao" id="flexRadioDefault1" value="Americano" <?php echo $regiao == 'Americano' ? 'checked' : '' ?>>
            <label class="form-check-label" for="flexRadioDefault1">
              Americano
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="regiao" id="flexRadioDefault2" value="Japonês" <?php echo $regiao == 'Japonês' ? 'checked' : '' ?>>
            <label class="form-check-label" for="flexRadioDefault2">
              Japonês
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="regiao" id="flexRadioDefault1" value="Europeu" <?php echo $regiao == 'Europeu' ? 'checked' : '' ?>>
            <label class="form-check-label" for="flexRadioDefault1">
              Europeu
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="regiao" id="flexRadioDefault2" value="Brasileiro" <?php echo $regiao == 'Brasileiro' ? 'checked' : '' ?>>
            <label class="form-check-label" for="flexRadioDefault2">
              Brasileiro
            </label>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-titulo">Descrição:</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Descrição das condições do jogo" rows="3" type="textarea" name="descricao"><?php echo $descricao ?></textarea>
        </div>
        <input type="hidden" name="id" value="<?php echo $id ?>">
        <button class="main-btn filter-btn" id="update" type="submit" name="update">Update</button>
    </form>    
</body>
</html>