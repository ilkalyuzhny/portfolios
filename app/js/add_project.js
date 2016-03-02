var myModule = (function () {

  var init = function () {
    _setUpListners();
  };

  var _setUpListners = function () {
    // прослушка событий
  //  $('.dobavit-project').on('click', _showModal); //открыть модальное окно
      $('#dobavit-new-project').on('click', _showModal); //открыть модальное окно
  //    $('#add-new-project').on('submit', _addProject); // добавление проекта
  ///    $('.b-close').on('click', _clearForm);
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

  return {
    init: init
  };

})();

myModule.init();
