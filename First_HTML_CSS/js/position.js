// width(), innerWidth() and outerWidth()
// height(), innerHeight() and outerHeight()

let boxWidth = $('.box').width();
let boxInnerWidth = $('.box').innerWidth();
let boxOuterWidth = $('.box').outerWidth();

console.log({boxWidth,boxInnerWidth,boxOuterWidth})
let winWidth = $(window).innerWidth();      // to get the window size
console.log(winWidth)

// resize
$(window).resize(function(){
    let width = $(this).innerWidth();
    if(width < 700)
    {
        $('.box').css('background-color','red');
    }
})

// position(), offset();
let pos = $('.container').position();
let off = $('.container').offset();
console.log(pos);
console.log(off);

let boxpos = $('.box').position();
let boxoff = $('.box').offset();
console.log(boxpos);
console.log(boxoff);



// jquery animate :-

// button1
// $('#btn').click(function(){
//     $('.box-2').animate({
//         'left': "+=200px",
//         'top': "+=200px",
//         'height': "+=40px"
//     },5000)
// })
$('#btn').click(function(){
    let winWidth = $(window).innerWidth();
    let boxWidth = $('.box-2').outerWidth();
    $('.box-2').animate({
        'left': winWidth - boxWidth,
        'height': "+=40px"
    },5000)
})

//button2
$('#btn2').click(function(){
    $('.box-2').animate({
        'right': "+=200px",
        'height': "+=40px"
    },5000)
})




// before, after, insertBefore, insertAfter, append, appendTo, prepend, prependTo

// To move element in the container with the help of append and prepend :-
// $('#change').click(function(){
//     $('.container').append("Hello World New");
// })
// $('#change').click(function(){
//     let el = $('.box-2');
//     $('.container').prepend(el);
// })

// To move element in the container with the help of appendTo and prependTo :-
// $('#change').click(function(){
//     let el = $('.box-2');
//     $('.box-2').appendTo('.container');
// })

// To move element in the container with the help of before and after :-
// $('#change').click(function(){
//     let el = $('.box-2');
//     $('.box-2').before('Hello world');
// })
// $('#change').click(function(){
//     let el = $('.box-2');
//     $('.container').after('el');
// })

// To move element in the container with the help of insertBefore and insertAfter :-
// $('#change').click(function(){
//     let el = $('.box-2');
//     $('.container').insertAfter('.box-2');
// })
// $('#change').click(function(){
//     let el = $('.box-2');
//     $('.box-2').insertBefore('Hello world');
// })




// wrap, wrapAll, wrapInnner, unwrap

//wrap
// $('#btn3').click(function(){
//     $('.elements p').wrap('<div>')
// })

// $('#btn3').click(function(){                         // it is a dynamic 
//     $('.elements p').wrap('<a href="https://google.com">')
// })

//wrapAll
// $('#btn3').click(function(){
//     $('.elements p').wrapAll('<a href="https://google.com">');
// })

//wrapInner
// $('#btn3').click(function(){
//     $('.elements p').wrapInner('<a href="https://google.com">');
// })
//    $('#btn3').click(function(){
//        $('.elements p').wrapInner('<span>');
// })

//unwrap
$('#btn3').click(function(){
    $('.elements p').unwrap();
})
