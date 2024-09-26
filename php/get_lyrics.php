<?php
    include ('db_connect.php');
    header("Content-Type:application/json");
    
    $sql = 'SELECT * FROM songs
            ORDER BY RAND()
            LIMIT 1';
    $stmt = $conn->prepare($sql);
            $stmt->execute();     
    

            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($row);
           

           
           