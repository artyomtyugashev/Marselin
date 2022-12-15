let globalX = 0;
let globalY = 0;

$(document) .on('mousemove', function(e){
   globalX = e.pageX;
   globalY = e.pageY;
});

$('.zoom-img-item').on('mousemove', function(){


   let img = $(this).attr('href');
   let imgBlock = $(this).find('img');
   let imgWidth = imgBlock.width();
   let imgHeight = imgBlock.height();
   let overlay = $('.zoom-img-overlay');
   let cursor = $('.zoom-img-cursor');
   let cursorWidth = cursor.outerWidth();
   let cursorHeight = cursor.outerHeight();
   let posX = globalX - $(this).offset().left - cirsorWidth / 2;
   let posY = globalY - $(this).offset().top - cirsorHeight / 2;

   cursor.css('left', posX + 'px');
   cursor.css('top', posY +'px');
   cursor.show();
});