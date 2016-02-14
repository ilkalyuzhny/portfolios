<?php
  // название проекта
  $name = $_POST['projectName'];
  // сформируем ответ для формы добавления проекта
  // создадим массив, в который добавим значения
  $data = array();

  //$data['text'] = 'OK';
  // проверка поля 'название проекта'
  if ($name === '') {
    $data['status'] = 'error';
    $data['text'] = 'Заполните имя!';
  }
  else {
    $data['status'] = 'OK';
    $data['text'] = 'Вы молодец, не забыли заполнить имя';
  }

  // добавим заголовок, сообщающий, что тип передаваемых
  // данных будет json
  header("Content-Type: application/json");
  // передадим данные $data
  echo json_encode($data);
  // выход из php
  exit;
?>
