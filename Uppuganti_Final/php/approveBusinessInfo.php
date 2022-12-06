<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
include('ini.php');
$_POST = json_decode($rest_json, true);
$bId = (int)$_POST['businessId'];
$isApprove = $_POST['isApprove'];

if ($bId != '') {
    if ($isApprove) {
        $query = "UPDATE Business set actionTaken = 1 where bId= $bId";
    } else {
        $query = "UPDATE Business set actionTaken = 2 where bId= $bId";
    }

    $result = @mysqli_query($dbconnect, $query);
    if ($result) {
        echo json_encode(["sent" => 1,]);
    } else {
        echo json_encode(["sent" => 0,]);
    }
}