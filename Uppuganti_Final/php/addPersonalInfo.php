<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('ini.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


$groupname = $_POST['Group'];
$members = $_POST['memberOfFamily'];


$query = "INSERT INTO FamilyGroup (groupname, members) 
VALUES ('$groupname', '$members')";
$result = @mysqli_query($dbconnect, $query);
if ($result) {
    echo json_encode(["sent" => 1,]);
} else {
    echo json_encode(["sent" => 0,]);
}
