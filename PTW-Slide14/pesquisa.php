<?php   
    header('content-type: application/json; charset=utf-8');
    try{
        $pdo = new PDO( 'mysql:host=estga-dev.clients.ua.pt; port:3306; dbname=ptw', 'ptw', 'ptw' );
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        $nome =filter_input(INPUT_POST,'nome');
        if(!$nome){
            $nome="";
        }
        
        $q = "SELECT * FROM ptw.Utilizadores where nome like ?";
        $statement = $pdo->prepare($q);                
        $statement->execute(array("%$nome%"));

        $json['contactos'] = $statement->fetchAll(PDO::FETCH_ASSOC);
        $json['erro']='none';
        echo json_encode($json);
    }catch(PDOException $e){
        $json['erro']=$e -> getMessage();
        echo json_encode($json);
    }       
?>