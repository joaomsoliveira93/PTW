<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Teste PHP DB</h1>
    <?php
  
    try{
        if(!isset($_GET['min'])){
            $min=20;
        }else{
            $min = $_GET['min'];
        }

        if(!isset($_GET['max'])){
            $max=40;
        }else{
            $max = $_GET['max'];
        }
        $pdo = new PDO( 'mysql:host=estga-dev.clients.ua.pt; port:3306; dbname=ptw', 'ptw', 'ptw' );
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        $q = "SELECT * FROM ptw.Utilizadores WHERE idade > ? AND idade < ? ";
        $statement = $pdo->prepare( $q );
        $statement->execute( array($min,$max));
        while ( $row = $statement->fetch(PDO::FETCH_BOTH) ) {
            echo $row[0] . ";" . $row['idade'] . "<br/>"; // ou $row[‘nome_campo’]
        }
    }catch(PDOException $e){
        echo "Erro: ". $e -> getMessage();
    }       
    ?>
</body>
</html>  