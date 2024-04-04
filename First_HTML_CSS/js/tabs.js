// .attr()
// let inputAttr = $('input').attr('type');
// let inputAttr = $('input').attr('name');
// let inputAttr = $('input').attr('user');
let inputAttr = $('input').attr('name','lastname');
console.log(inputAttr);

$('.tabs a').click(function(){
    // debugger                        // to get the logical error 
    let attr = $(this).attr('href');
    $(attr).show();
    $(attr).siblings().hide();
})

// pageX, pageY
// $(document).click(function(e){
//     let x = e.pageX;
//     let y = e.pageY;
//     console.log({x,y});
// })
$(document).click(function(e){
    let x = e.pageX;
    let y = e.pageY;
    $('.popup').css({'left': x, 'top': y, 'display': 'block'})
    let winWidth = $(window).innerWidth();
    let half = winWidth/2;
    if(x > half){
        $('.popup').text("Bye Everyone");
    }
    else{
        $('.popup').text("hello Everyone");
    }
})