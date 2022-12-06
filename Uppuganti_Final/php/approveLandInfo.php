<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
include('ini.php');
$_POST = json_decode($rest_json, true);
$userPropertyId = (int)$_POST['userPropertyId'];
$isApprove = $_POST['isApprove'];

if ($userPropertyId != '') {
    if ($isApprove) {
        $query = "UPDATE UserProperties set actionTaken = 1 where userPropertyId= $userPropertyId";
    } else {
        $query = "UPDATE UserProperties set actionTaken = 2 where userPropertyId= $userPropertyId";
    }

    $result = @mysqli_query($dbconnect, $query);
    if ($result) {
        echo json_encode(["sent" => 1,]);
    } else {
        echo json_encode(["sent" => 0,]);
    }
}