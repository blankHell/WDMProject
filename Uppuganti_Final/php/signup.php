<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
include('ini.php');
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$phone = $_POST['phoneNumber'];
$pass = $_POST['password'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT, ['cost' => 15]);
$ancestor = (int)$_POST['selectedAncestor'];
$relation = $_POST['relation'];
$gender = $_POST['gender'];


if ($firstName != '') {
    $query = "INSERT INTO UserDetails (firstName,lastName,email,password,gender,ancestor,relation,contact,isActive) VALUES ('$firstName', '$lastName', '$email', '$password', '$gender', $ancestor, '$relation', '$phone', 0)";
    $result = @mysqli_query($dbconnect, $query);
    if ($result) {
      echo json_encode(["sent" => 1,]);
    } else {
      echo json_encode(["sent" => 0,]);
    }
}