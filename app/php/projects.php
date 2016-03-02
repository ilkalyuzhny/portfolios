<?php

header('Content-Type: application/json');

$projectName = $_POST["projectName"];
$picture = $_POST["picture"];
$projectUrl = $_POST["projectUrl"];
$text = $_POST["text"];

sleep(1);

$result = true;

echo json_encode(array(
   'status' => $result
));
