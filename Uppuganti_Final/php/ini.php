<?php
$host="utacloud3";
$user='bat5491_admin';
$pass='Zebro@1997';
$db='bat5491_DiazSifontesFamily';
$dbconnect =mysqli_connect ($host,$user,$pass,$db);
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}
