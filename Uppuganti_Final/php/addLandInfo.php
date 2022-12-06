<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('ini.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$location = $_POST['location'];
$landOwned = floatval ($_POST['landOwned']);
$relationWithLand = $_POST['relationWithLand'];
$details = $_POST['landDetails'];
$userId = (int)$_POST['userId'];


$query = "INSERT INTO UserProperties (userId,area,details,location,relationWithLand) 
VALUES ('$userId', '$landOwned', '$details','$location', '$relationWithLand')";
$result = @mysqli_query($dbconnect, $query) or trigger_error("Query Failed! SQL: $query - Error: " . mysqli_error($dbconnect), E_USER_ERROR);
if ($result) {
    echo json_encode(["sent" => 1,]);
} else {
    echo json_encode(["sent" => 0,]);
}
