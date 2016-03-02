$(document).ready(function(){

  // по клику формы sabmit
  $('#form').on('submit', function(e){
    e.preventDefault();


    var form = $(this);

    if (validateThis(form)) {
      postFormData(form, function(data){
        //console.log('sended');
        if (data.status) {
          console.log('Вход выполнен! Валидация пройдена!');
        } else {
          console.log('где-то ошибка');
        }
      });

    } else {
      console.log('Валидация не выполнена!');
    }

  });

}); // -> ready_end;

// Обработка формы
function postFormData(form, successFunction) {
  var host = form.attr('action'),
      reqFields = form.find('[name]'),
      dataObj = {};

      // мини тестирование
      if (!host) {
        console.log('Установите атрибут действия!');
      }

      reqFields.each(function(){
        var $this = $(this), // прохождение по полям для сбора необходимого объекта
            value = $this.val(),
            name = $this.attr('name');

          dataObj[name] = value;
      });

      // console.log(dataObj);
      // отправка запроса (что и куда)
      $.post(host, dataObj, successFunction);
};

// Валидация
function validateThis(form){
  var validationMethods = {
    text : function($this){
      // проверка на непустую строку, когда в ней что-то есть
      var notEmptyField = !!$this.val(); // если $this.val() true, то if. !! - приведение к булевскому типу

      if (notEmptyField) {
        // если не пустое поле, то ничего не делается
        $this.removeClass('error'); // если поле прошло валидацию, то класс удалим
      } else { // если пустое, то нужно указать, что провалидировалось
          $this.tooltip({ // выведем тултип
            content: 'введите логин',
            position: 'left'
          });
          $this.addClass('error'); // если поле не прошло валидацию
      }

    },

    password : function($this){
      // проверка на непустую строку, когда в ней что-то есть
      var notEmptyField = !!$this.val(); // если $this.val() true, то if. !! - приведение к булевскому типу

      if (notEmptyField) {
        // если не пустое поле, то ничего не делается
        $this.removeClass('error'); // если поле прошло валидацию, то класс удалим
      } else { // если пустое, то нужно указать, что провалидировалось
          $this.tooltip({ // выведем тултип
            content: 'введите пароль',
            position: 'left'
          });
          $this.addClass('error'); // если поле не прошло валидацию
      }

    }

  }

  // находим все поля с атрибутом data-validation (поиск по атрибутам)
  form.find('[data-vaidation]').each(function(){
        var $this = $(this),
            type = $this.data('vaidation');

        validationMethods[type]($this);
    });

    return !(form.find('.error').length); // если ничего не найдется, то вернется false

}

$.fn.tooltip = function(options){

    var TooltipsModule = (function(){
      options = {
        // задаем некий параметр/конструкцию по умолчанию (пример)
        position : options.position || 'top',
        content : options.content || 'I am tooltip'
      };

      // метод генерирущий нашу разметку-тултипы
      // и передаем то, что будет в option
      var generateMarkup = function(options){
        var markup = '<div class="tooltip tooltip_' + options.position + '"> \
                        <div class="tooltip__inner">' + options.content + '</div> \
                      </div>';

            return markup;
      };

      // ф-ия, отвечающая за позиционирование тултипов
      var positionIt = function(element, currentTooltip, position){
        // сюда записываем измерения; считаем все края элемента
        var Element = function(elem){ // Element - класс
          this.width = elem.outerWidth(true);
          this.height = elem.outerHeight(true);
          this.topEdge = elem.offset().top;
          this.bottomEdge = this.topEdge + this.height;
          this.leftEdge = elem.offset().left;
          this.rightEdge = this.leftEdge + this.width;
        };

        // повторяем для тултипа. записываем измерения; считаем все края элемента
        var Tooltip = function(tooltip){
          var elem = new Element(element); // вызываем элемент

          this.width = tooltip.outerWidth(true); // ширина тултипа
          this.height = tooltip.outerHeight(true); // выста тултипа

          // произведем вычесления тултипа
          this.leftCentered = (elem.width / 2) - (this.width / 2);
          this.topCentered = (elem.height / 2) - (this.height / 2);
        }

        // позиционируем с помощью св-ва offset
        var positions = {};
        var elem = new Element(element);
        var tooltip = new Tooltip(currentTooltip);

        // вычисления
        switch (position) {
                case 'right' :
                    positions = {
                        left: elem.rightEdge,
                        top: elem.topEdge + tooltip.topCentered
                    };
                    break;
                case 'top' :
                    positions = {
                        left: elem.leftEdge + tooltip.leftCentered,
                        top: elem.topEdge - tooltip.height
                    };
                    break;
                case 'bottom' :
                    positions = {
                        left: elem.leftEdge + tooltip.leftCentered,
                        top: elem.bottomEdge
                    };
                    break;
                case 'left' :
                    positions = {
                        left: elem.leftEdge - tooltip.width,
                        top: elem.topEdge + tooltip.topCentered
                    };
                    break;
        }

        // отпозиционируем тултипы
        currentTooltip
          .offset(positions)
          .css('opacity', '1');
      }

      // делаем ф-ию init, вызовем тултипы, добавив их в body
      return {
        init: function($this){

          $(document).on('click', function(){
            $('.tooltip').remove();
          });

          var markup = generateMarkup(options); // вызовем ф-ию

          var form = $('form'); // вместо form было указано body

          form.append(markup); // добавим контент в body

          positionIt($this, form.find('.tooltip').last(), options.position); // отпозиционируем
        }
      }

    }());


    $(this).each(function(){ // цикл вызывается для каждого поля
        return TooltipsModule.init($(this)); // инициализируем модуль TooltipsModule
    });
};
