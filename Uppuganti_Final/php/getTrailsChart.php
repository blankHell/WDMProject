<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('ini.php');

$query = "SELECT userId, count(userId) as Count FROM UserDetails u join Trails t on u.userId = t.accuserId or u.userId = t.accusedId
group by userId";
$result = mysqli_query($dbconnect, $query);
$users = array();
while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}
$response = $users;


echo json_encode($response);
exit;
