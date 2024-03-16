<?php

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    header("location: index.html");
} 
die();

$nombre = $_POST['nombre2'],
$meil = $_POST['meil2'],
$comentario = $_POST['comentario'],

if (empty(trim($nombre))) $nombre = 'anonimo';

$body = <<<HTML 
    <h1>Contacto desde la web</h1>
    <p>Enviado por: $nombre</p>
    <p>Contacto: $telefono</p>
    <p>Email: $meil</p>
    <h3>Comentario:</h3>
    $comentario
HTML;

$headers = "MIME-Version: 1.0 \r\n";
$headers2 = "Content-type: text/html; charset=utf-8 \r\n";
$headers3 = "From: $nombre <$mail> \r\n";
$headers4 = "To: Formulario trabaja con nosotros <carolinainesdelgado@gmail.com \r\n";


$rta = mail('carolinainesdelgado@gmail.com', "envio de CV: $nombre", $body);

var_dump($rta);
