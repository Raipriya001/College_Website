$('.title').click(function(){
    $(this).siblings('.title').removeClass('open');
    $(this).toggleClass('open');
    $(this).next().siblings('.description').slideUp();
    $(this).next().slideToggle();

})