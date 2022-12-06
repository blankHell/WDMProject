<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('ini.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$accusedId =(int) $_POST['accusedId'];
$accuserId = (int)$_POST['accusorId'];
$details = $_POST['details'];


$query = "INSERT INTO Trails (accuserId, accusedId, description) 
VALUES ($accuserId, $accusedId, '$details')";

$result = @mysqli_query($dbconnect, $query);

if ($result) {
    echo json_encode(["sent" => 1,]);
} else {
    echo json_encode(["sent" => 0,]);
}

