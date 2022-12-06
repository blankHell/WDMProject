<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('ini.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$Name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$description = $_POST['description'];
if ($Name != '') {
    $query = "INSERT INTO Contactus (email,name,subject,description) VALUES ('$email', '$Name','$subject', '$description')";
    $result = @mysqli_query($dbconnect, $query);
    if ($result) {
        echo json_encode(["sent" => 1,]);
    } else {
        echo json_encode(["sent" => 0,]);
    }
}