<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('ini.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$businessType = $_POST['businessType'];
$location = $_POST['locationBusiness'];
$details = $_POST['details'];
$userId = (int)$_POST['userId'];

if($location!=''){
    $query = "INSERT INTO Business (businessType,property,details,userId) 
    VALUES ('$businessType','$location','$details',$userId)";
    $result = @mysqli_query($dbconnect, $query) or trigger_error("Query Failed! SQL: $query - Error: " . mysqli_error($dbconnect), E_USER_ERROR);
    
    if ($result) {
        $response = "success";
    } else {
        $response = $result;
    }
    echo $response;
}

