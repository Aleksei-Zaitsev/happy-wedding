<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $namePop = $_POST['namePop'];
    $surnamePop = $_POST['surnamePop'];
    $fathersNamePop = $_POST['$fathersNamePop'];
    $phonePop = $_POST['phonePop'];
    $eMailPop = $_POST['eMailPop'];
    $marryDatePop = $_POST['marryDatePop'];

    $content = "<html>
    <body>
        <h1 style='color: #1a53a8; text-align: center; font-size: 30px; font-family: sans-serif;'>Заявка</h1>
        <p style='font-size: 23px; font-family: sans-serif;'>$namePop</p>
        <p style='font-size: 23px; font-family: sans-serif;'>$surnamePop</p>
        <p  style='font-size: 23px; font-family: sans-serif;'>$fathersNamePop</p>
        <p style='font-size: 23px; font-family: sans-serif;'>$phonePop</p>
        <p style='font-size: 23px; font-family: sans-serif;'>$eMailPop</p>
        <p style='font-size: 23px; font-family: sans-serif;'>$marryDatePop</p>
    </body>
    </html>
    ";


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $success = mail("Aleksei.Zaitsev.V@yandex.ru", 'Заявка на перевозку', $content, $headers);

    if ($success) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }
} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}