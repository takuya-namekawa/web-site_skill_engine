 $('.accodion__question').on('click', function(){
   $(this).toggleClass('active')
   $(this).next().slideToggle(200);
 });
