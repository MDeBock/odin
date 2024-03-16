<?php

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    header("location: index.html");
} 
die();

$nombre = $_POST['nombre'],
$telefono = $_POST['telefono'],
$email = $_POST['email'],
$mensaje = $_POST['mensaje'],

if (empty(trim($nombre))) $nombre = 'anonimo';

$body = <<<HTML 
    <h1>Contacto desde la web</h1>
    <p>Enviado por: $nombre</p>
    <p>Contacto: $telefono</p>
    <p>Email: $email</p>
    <h3>Mensaje:</h3>
    $mensaje
HTML;

$headers = "MIME-Version: 1.0 \r\n";
$headers. = "Content-type: text/html; charset=utf-8 \r\n";
$headers. = "From: $nombre <$email> \r\n";
$headers. = "To: Formulario trabaja con nosotros <carolinainesdelgado@gmail.com \r\n";
$headers. = "Cc: copia@email.com \r\n";
$headers. = "Bcc: copia@email.com \r\n";

$rta = mail('carolinainesdelgado@gmail.com', "envio de CV: $nombre", $body, $headers);

header("location: index.html")