$(document).ready(function() {
  $('input, textarea').qtip({
      content: {
        text: 'введите имя'
      },
      position: {
        my: 'left center',
        alt: 'left center',
        viewport: $(window)
     }
   })
 });
