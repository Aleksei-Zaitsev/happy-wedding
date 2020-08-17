<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $fathersName = $_POST['$fathersName'];
    $phone = $_POST['phone'];
    $eMail = $_POST['eMail'];
    $marryDate = $_POST['marryDate'];

    $content = "<html>
    <body>
        <h1 style='color: #1a53a8; text-align: center; font-size: 30px; font-family: sans-serif;'>Заявка</h1>
        <p style='font-size: 23px; font-family: sans-serif;'>$name</p>
        <p style='font-size: 23px; font-family: sans-serif;'>$surname</p>
        <p  style='font-size: 23px; font-family: sans-serif;'>$fathersName</p>
        <p style='font-size: 23px; font-family: sans-serif;'>$phone</p>
        <p style='font-size: 23px; font-family: sans-serif;'>$eMail</p>
        <p style='font-size: 23px; font-family: sans-serif;'>$marryDate</p>
    </body>
    </html>
    ";


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $success = mail("LogisticsPlanet1@mail.ru, Aleksei.Zaitsev.V@yandex.ru", 'Заявка на перевозку', $content, $headers);

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