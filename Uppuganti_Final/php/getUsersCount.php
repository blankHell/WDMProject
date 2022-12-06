<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('ini.php');

$query = "SELECT COUNT(userId) FROM UserDetails";
if($result = mysqli_query($dbconnect, $query)){
    // Return the number of rows in result set
    $rowcount = mysqli_num_rows( $result );
    
 }
echo json_encode($rowcount);
exit;
