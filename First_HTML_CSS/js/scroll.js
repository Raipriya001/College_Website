// $(window).scroll(function(){
//     console.log("scroll executed");
// })

// $('.container').scroll(function(){
//     // ScrollTop()
//     let top = $(this).scrollTop();
//     console.log(top);
// })

$('.container').scroll(function(){
    let top = $(this).scrollTop();
    let pos = $('.para').position();
    console.log({top, topPos: pos.top})
    
    if(top > pos.top){
        $('.para').css('background-color','red');
    }
})
$('p:contains("harsh")').css('color','blue');      // it set the color of that word which is exist in the para

$('container').empty();                      // for empty

let a = $('p').hasclass('para');             // it only return true and false
console.log(a);

// let b = $('.container').has('p');
// console.log(b);
//or
let b = $('.container').has('label');
console.log(b);