<?php
    include ('db_connect.php');
    header("Content-Type:application/json");
    
    $request_body = file_get_contents('php://input');
    
    $data = json_decode($request_body, true);

    $chosen_index = $data['chosenIndex'];
    //axios預設以json傳送、接收資料，所以後端這裡要先解json才讀的到資料


    $sql = 'SELECT lyrics FROM songs
            where key_of_songs <> :chosenIndex
            ORDER BY RAND()
            LIMIT 1';
    $stmt = $conn->prepare($sql);
            $stmt->execute(['chosenIndex'=>$chosen_index]);     
            //預防sql注入問題，將資料與sql指令分開

            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($row);
           

           
           