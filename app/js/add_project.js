var myModule = (function () {

  var init = function () {
    _setUpListners();
  };

  var _setUpListners = function () {
    // прослушка событий
  //  $('.dobavit-project').on('click', _showModal); //открыть модальное окно
      $('#dobavit-new-project').on('click', _showModal); //открыть модальное окно
  //    $('#add-new-project').on('submit', _addProject); // добавление проекта
  };

  var _showModal = function (ev) {
    console.log('Вызов модального окна');
    ev.preventDefault(); // ev или e - событие
    // применение метода bPopup к обертке
    $('#new-progect-popup').bPopup({
      speed: 650,
      transition: 'slideDown'
    });
  };

/*
  var _addProject = function (ev) {
    console.log('Добавление проекта');
    ev.preventDefault();

    // объявляем переменные
    var form = $(this), // объект this указывает внутри функции на нашу форму
        url = 'php/add_project.php', // создадим позднее
        data = form.serialize();

    console.log(data); // вывод в консоль данных

    // запрос на сервер
    $.ajax({
      url: url, // адрес файла
      type: 'POST',
      dataType: 'json',
      data: data,
    })
    .done(function(ans) {
      console.log(ans);
      //  console.log(ans); // вывод ответа от сервера
      if(ans.status === 'OK') {
        console.log(ans.text);
      //  console.log('Ура! Все выполнилось!');
        form.find('.success-mes').text(ans.text).show();
      }
      // если не выполнилось, то берем форму, находим в ней
      // блок '.error-mes' и вставлять в него текст ans.error
      else {
        console.log(ans.text);
        form.find('.error-mes').text(ans.text).show();
        // .show(); показывает скрытые блоки
      }
    })
    .fail(function() {
      console.log("error");
    })
  */
/*    .always(function() {
      console.log("complete");
    }); */

  //  console.log(form);
//  };

  return {
    init: init
  };

})();

myModule.init();
