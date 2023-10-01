<?php

if ($_SERVER['HTTP_SEC_FETCH_SITE'] === 'none') {
  die('No direct access');
}

header("Content-Type: application/json");

$URL = $_GET['url'];
$isGame = $_GET['isGame'];

$today = (new DateTime())->format('Y-m-d');
$filename = '../data/data.json';
$dir = '../data';

function setData($games, $dir, $filename) {
  $decoded = json_decode($games);

  if(!is_dir($dir)) {
    mkdir($dir, 0777, true);
}
  $file = fopen($filename, "a+");
  file_put_contents($filename, json_encode($decoded));
  echo $games;
}

if (file_exists($filename) && (date("Y-m-d", filemtime($filename)) == $today && !$isGame )) {
    $file = file_get_contents($filename);

    echo $file;
} else if ($URL) {
  $curl = curl_init();

  curl_setopt_array($curl, [
    CURLOPT_URL => $URL,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => [
      "X-RapidAPI-Host: mmo-games.p.rapidapi.com",
      "X-RapidAPI-Key: 1ac0bc8aaemshaed3d523fedbf09p12cec5jsn37ee6f0e3077",
      'Content-Type: application/json',
      'Accept: application/json'
    ],
  ]);
  
  $response = curl_exec($curl);
  $err = curl_error($curl);
  
  curl_close($curl);
  
  if ($err) {
    echo "cURL Error #:" . $err;
  } else if ($isGame) {
    echo $response;
  } else {
    setData($response, $dir, $filename);
  }
}

unset($file);
unset($data);
unset($curl);
?>
