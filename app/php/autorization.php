<?php

header('Content-Type: application/json');

$login = $_POST["login"];
$password = $_POST["password"];

sleep(1);

$result = true;

echo json_encode(array(
   'status' => $result
));
