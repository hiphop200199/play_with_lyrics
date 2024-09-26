<?php


$servername = "sql105.infinityfree.com";
$username = "if0_35569080";
$password = "dDNZa1Unvm8";
$databasename = 'if0_35569080_songs';

try {
  $conn = new PDO('mysql:host='.$servername.';charset=utf8mb4;dbname='.$databasename, $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
 
  
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>

