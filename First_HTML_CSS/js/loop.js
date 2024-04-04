// .each()
let listItems = $('ul li');
listItems.text("Hello");

console.log(listItems);

listItems.each(function(index,item){
    console.log({index,item});
    $(item).html("Hello" + (index+1));
})

// $('input[type="radio"]:checked')  - select checked elememt

$('#getValue').click(function(){
    let el = $('input[type="radio"]:checked');
    console.log(el);
    if(el.length > 0){
        let values = el.val();
        alert(values);
    }
    else{
        alert("Please select an option");
    }
})

// $('#checkVal').click(function(){
//     let checkedE1 = $('input[type="checkbox"]:checked');
//     if(checkedE1.length > 0){
//         let data="";
//         checkedE1.each(function(index,item){
//              console.log($(item).val());

//              let itemVal = $(item).val();
//              data +=itemVal;
//              $('#output').text(itemVal);
//         })
//     }
//     else{
//         alert("Please Select an option");
//     }
// })

// or 
$('#checkVal').click(function(){
    let checkedE1 = $('input[type="checkbox"]:checked');
    if(checkedE1.length > 0){
        checkedE1.each(function(index,item){
             console.log($(item).val());
             
             let itemVal = $(item).val();
             $('#output').append('<p>'+itemVal+'</p>');
        })
    }
    else{
        alert("Please Select an option");
    }
})