$(function() {
  console.log('Файл main.js успешно загружен')
});

$(function(){

       var field = new Array(/*"login", "password", *//*"Name", "E-mail", "Message"*//*, "projectName", "picture", "projectUrl", "text"*/);//поля обязательные

       $("form").submit(function() {// обрабатываем отправку формы
           var error=0; // индекс ошибки
           $("form").find(":input").each(function() {// проверяем каждое поле в форме
               for(var i=0;i<field.length;i++){ // если поле присутствует в списке обязательных
                   if($(this).attr("name")==field[i]){ //проверяем поле формы на пустоту

                       if(!$(this).val()){// если в поле пустое
                           $(this).css('border', '#67dffa 1px solid');// устанавливаем рамку красного цвета
                           $(this).css('background-color', '#fad2d1');
                           error=1;// определяем индекс ошибки

                       }
                       else{
                           $(this).css('border', '#67dffa 1px solid');// устанавливаем рамку обычного цвета
                           $(this).css('background-color', '#ffffff');
                       }

                   }
               }
          })

           if(error==0){ // если ошибок нет то отправляем данные
               return true;
           }
           else{
           if(error==1) var err_text = "Не все обязательные поля заполнены!";
           $("#messenger").html(err_text);
           $("#messenger").fadeIn("slow");
           return false; //если в форме встретились ошибки , не  позволяем отослать данные на сервер.
           }



       })
   });

/*   $(document).ready(function() {
      $('a[qtip-content]').qtip();
    });
*/
/*
  $('input[qtip-content]').qtip({
    position: {
      my: 'left center',
      //положение курсора
      alt: 'left center',
      //положение всплывашки
      viewport: $(window)
      // всплывашка не вылезет за края экрана
    }
  });
*/
