<?php

#CÃ³digo abaixo feito seguindo o tutorial: https://www.youtube.com/watch?v=h5ghlfvU3S8
#VÃ­deo: Working Contact Form in PHP with Validation & Email Sending
#Canal:FollowAndrew



if(isset($_POST['email']) && $_POST['email'] !=''){

    if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
    

$userName = $_POST['nome'];
$userTelefone = $_POST['tel'];
$userEmail = $_POST['email'];
$userAssunto = $_POST['assunto'];
$userMensagem= $_POST['menssagem'];

$to ="leonardocarmo9803@gmail.com";
$body="";
$subject = "Nova mensagem do site composteira";

$headers = 'From: '  . "\r\n" .
    'X-Mailer: PHP/' . phpversion();


$body .="Nome: ".$userName."\r\n";
$body .="Email: ".$userTelefone."\r\n";
$body .="Whatsapp: ".$userEmail."\r\n";
$body .="Empresa: ".$userAssunto."\r\n";
$body .="Faturamento: ".$userMensagem."\r\n";

mail($to,$subject,$body,$headers );


}}

?>