<?php

$assunto = $_POST["assunto"];
//dados do interessado
$email = $_POST["email"];

require_once("../vendor/autoload.php");
require_once("../vendor/phpmailer/phpmailer/PHPMailerAutoload.php");

$mail = new PHPMailer;

$mail->SMTPDebug = 0;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'submacaco@gmail.com';                 // SMTP username
$mail->Password = 'queryC418';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('submacaco@gmail.com', $assunto);
$mail->addAddress('dotpegaso@gmail.com');     // Add a recipient
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(false);                                  // Set email format to HTML

$mail->Subject = $assunto;
$mail->Body    = 'Email para contato: ' . $email;
$mail->AltBody = 'Email para contato: ' . $email;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}


// //construção do email
// $to      = "contato@otakontro.com.br";
// $subject = $assunto;
// $message = "Email para contato: " . $email ."\n". "Nome do interessado: " . $nome ."\n". "Atividade: " . $atividade ."\n". "Descrição: " . $descricao ;
// $headers = 'From: contato@otakontro.com.br' . "\r\n" .
//     'Reply-To: contato@otakontro.com.br' . "\r\n" .
//     'X-Mailer: PHP/' . phpversion();

// //método para envio
// mail($to, $subject, $message, $headers);
?> 