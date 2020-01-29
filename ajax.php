<?php

$ville = $_GET['ville'];


$URL = curl_init("http://api.openweathermap.org/data/2.5/weather?q=$ville,fr&APPID=c258fc6895fd434a29b13afc9524c099&units=metric&lang=fr");

curl_setopt($URL, CURLOPT_RETURNTRANSFER, true); //transformation en chaine de caractère au lieu de l'afficher directement

$exec = curl_exec($URL); //execution de l'API'

if ($exec === false){
    var_dump(curl_error($URL)); // test des erreurs
}

else{
    $decode = json_decode($exec, true); // décode la chaîne JSON
    echo $decode['main']['temp']. ' c°';
    echo '<br>';
    echo $decode['name'];
}

curl_close($URL);
//Fermer la session