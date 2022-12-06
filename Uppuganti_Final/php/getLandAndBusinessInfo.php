<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('ini.php');

$query = "SELECT * FROM UserProperties where actionTaken = 0";
$result = mysqli_query($dbconnect, $query);
$landInfo = array();
while ($row = $result->fetch_assoc()) {
    $landInfo[] = $row;
}

$query = "SELECT * FROM Business where actionTaken = 0";
$result = mysqli_query($dbconnect, $query);
$businessInfo = array();
while ($row = $result->fetch_assoc()) {
    $businessInfo[] = $row;
}

$response['landInfo'] = $landInfo;
$response['businessInfo'] = $businessInfo;


echo json_encode($response);
exit;
