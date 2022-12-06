<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('ini.php');

$query = "SELECT COUNT(trailId) FROM Trails";
$query1 = "SELECT COUNT(bId) FROM Business";
$query2 = "SELECT COUNT(userPropertyId) FROM UserProperties";
$data = array();
if($result = mysqli_query($dbconnect, $query)){
    // Return the number of rows in result set
    $data[0] = mysqli_num_rows( $result );
 }
 if($result = mysqli_query($dbconnect, $query1)){
    // Return the number of rows in result set
    $data[1] = mysqli_num_rows( $result );
 }
 if($result = mysqli_query($dbconnect, $query2)){
    // Return the number of rows in result set
    $data[2] = mysqli_num_rows( $result );
 }
echo json_encode($data);
exit;
