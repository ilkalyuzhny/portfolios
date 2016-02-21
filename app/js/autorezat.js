/*
$(document).ready(function() {
  $('input').qtip({
      content: {
        text: 'введите название'
      },
      position: {
        my: 'left center',
        alt: 'left center',
        viewport: $(window)
     }
   })
 });
*/
/*
 $(document).ready(function(){//страница загрузилась
    $('.block-textarea').hover(function(){	//при наведении на элемент:
        var helptext = $(this).attr('placeholder') 	//текст подсказки
        $('.qtip').html(helptext).show();	//размещаем текст подсказки в блок тултипа и делаем его видимым
        //далее устанавливаем тултипу значения позиции с помощью абсолютного позиционирования:
        //позиция элемента сверху + высота элемента -> $(this).offset().top+$(this).height()
        //позиция элемента слева -> $(this).offset().left
        $('.qtip').offset({top:$(this).offset().top+$(this).height(),left:$(this).offset().left});
    },function(){
        $('.qtip').hide();	//скрываем тултип
    });
});
//в итоге подсказка окажется ровно под элементом наведения
*/
/*
 function() {
    $('input').qtip({
        position: {
            my: 'left center',
            alt: 'left center',
            viewport: $(window)
 }
 */