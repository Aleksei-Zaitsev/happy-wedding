<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nameCall = $_POST['nameCall'];
    $phoneCall = $_POST['phoneCall'];

    $content = "<html>
    <body>
        <h1 style='color: #1a53a8; text-align: center; font-size: 30px; font-family: sans-serif;'>Заявка</h1>
        <p style='font-size: 23px; font-family: sans-serif;'> $nameCall . ' оставил заявку на обратный звонок.'</p>
        <p style='font-size: 23px; font-family: sans-serif;'> ' Телефон - ' . $phoneCall . '.'</p>
    </body>
    </html>";

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $success = mail('LogisticsPlanet1@mail.ru' , 'Запрос на обратный звонок', $content, $headers);

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