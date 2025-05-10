<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php'; 

$mail = new PHPMailer(true); 
try {
    // SMTP настройки
    $mail->isSMTP();
$mail->Host       = 'smtp.yandex.ru';
$mail->SMTPAuth   = true;
$mail->Username   = 'miss.le-malygina@yandex.ru';
$mail->Password   = 'evfxcxfxcfhgrbev';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port       = 465;
$mail->setFrom('miss.le-malygina@yandex.ru', 'Сайт');
$mail->addAddress('miss.le-malygina@yandex.ru');
$mail->isHTML(true);
$mail->Subject = 'Текстовое письмо с сайта';
$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);
$message = htmlspecialchars($_POST['message']);
$mail->Body = "
<h3>новая заявка:</h3>
<b>имя:</b>$name<br>
<b>телефон:</b>$phone<br>
<b>опиание товара:</b><br>$message
";
$mail->send();
    echo 'Сообщение отправлено!';
} catch (Exception $e) {
    echo 'Ошибка отправки: ', $mail->ErrorInfo;
}