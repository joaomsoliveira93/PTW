<?php
    header('content-type: application/json; charset=utf-8');
    try{

        $pdo = new PDO( 'mysql:host=estga-dev.clients.ua.pt; port:3306; dbname=ptw', 'ptw', 'ptw' );
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        $q = "SELECT ptw.Utilizadores.utilizador,ptw.Utilizadores.nome, ptw.Utilizadores.idade,ptw.CatUtilizadores.nome as categoria FROM ptw.Utilizadores INNER JOIN ptw.CatUtilizadores ON ptw.Utilizadores.categoria = CatUtilizadores.id ";
        $statement = $pdo->prepare( $q );
        $statement->execute();
        $json['Utilizadores'] = $statement->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($json);
    }catch(PDOException $e){
        $json['erro']=$e -> getMessage();
        echo json_encode($json);
    }       
?>
