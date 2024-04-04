// // jQuery 

// // $('css selectors')- Used for selecting elements from DOM
// // document is an object
// $(document).ready(function(){
// //To change single css property and only single css will be change at a time   
//     $('p').css('color','red');

// // To add multiple css properties   
//     // $('h2').css({'color':'blue','background-color':'red'});

//     $('#styleButton').click(function(){
//         $('h2').css({'color':'grey','background-color':'yellow'});
// })
// });                                    // ready function is executed when DOM is loaded completely.In there brackets functions or anonymous function is added.

    
// //document



// $('css selector') - is used to select the element from DOM and css selector is used to use the css selected element in the jQuery.
$(document).ready(function(){
    // to add a single css property
    // $('p').css('color','#f98998');

    // to add multiple css property
    // $('p').css({'color':'red','background-color':'lightblue'})

    $('#styleButton').click(function(){
                $('h2').css({'color':'blue','background-color':'yellow'});
         })

        // hide(),show(),toggle()
        //fadeOut(),fadeIn(),fadeToggle() :- hide show with fading effect.
        //slideOut(),slideIn(),slideToggle() :- hide show with sliding effect.
         $('#hide').click(function(){
            $('#paragraph').hide(); 
         })

         $('#show').click(function(){
            $('#paragraph').show(); 
         })

         $('#toggle').click(function(){
            $('#paragraph').toggle(); 
         })

         // Paragraph2
         $('#addClass').click(function(){
            $('#paragraph2').addClass('primary');
         })
         $('#removeClass').click(function(){
            $('#paragraph2').removeClass('primary');
         })
         $('#toggleClass').click(function(){
            $('#paragraph2').toggleClass('primary alternate');
         })


         // Parent(),children(),siblings(),find() and closest()  - These are use for selectors functions
         // 1. Parent:-
         // $('p').parent().css('border','1px solid grey');        
         $('p').parent('.inner').css('border','1px solid grey');
         // $('p').parent('div').css('border','1px solid grey'); 
         
         // 2. Children:-
         // $('.inner').children().css('border','2px solid red');
         // $('.inner').children('.spa').css('border','2px solid red');
         $('.inner').children('.para').css('border','2px solid red');

         //3. Siblings:-
         // $('p').siblings().css('color','green');
         // $('p').siblings('.spa').css('color','green');
         $('p').siblings('.para').css('color','green');

         // 4. Find:-
         $('div').find('spa').css('color','blue');

         // 5. Closest:-
         // $('span').closest('div').css('color','blue');
         $('span').closest('.container').css('border','1px solid orange');

         $('.dropdown').click(function(){
            $(this).siblings('.dropdown').find('.dropdown-menu').slideUp();
            $(this).find('.dropdown-menu').slideToggle();
         })


// next(), prev(), .text(), .html(), .val()
         // .html and .text are same, but in .text all value is return or as a sring, and in .html only tags value is return.

         // .html():- To get the value of that element. You can pass the tags in it.    EXAMPLE-
         // var el = $('p').html();
         // console.log(el);

         // .html(set value):- in it only instance value is get.   EXAMPLE-
         // var el = $('p').html('Hello world');
         // console.log(el);
         


// keypress(),keydown(),keyup()
         // $('#text1').val("ABC");
         //keypress():-
         // $('#text1').keypress(function(){
         //    let value = $(this).val();
         //    $('#output').html(value);
         // })

          // $('#text1').val("ABC");
         //keydown():-
         // $('#text1').keydown(function(){
         //    let value = $(this).val();
         //    $('#output').html(value);
         // })

         $('#text1').val("ABC");
         //keyup():-
         $('#text1').keyup(function(){
            let value = $(this).val();
            $('#output').html(value);
         })

//event object:-
         // $('#text1').keyup(function(e){
         //    console.log(e)
         //    let value = $(this).val();
         //    $('#output').html(value);
         // })

// for keypress
         // $(window).keydown(function(e){
         //    console.log(e.keyCode);
         //    let code = e.keyCode;
         //    if(code == 38){
         //       alert("Key Pressed");
         //    }
         // })

// for enter         
         $(window).keydown(function(e){
            console.log(e.keyCode);
            let code = e.keyCode;
            if(code == 13){
               alert("Key Pressed");
            }
         })
})