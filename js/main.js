// This came from https://codepen.io/patrickwestwood/pen/gPPywv
//CodePen Home
// Displaying The Character Count of a Textarea
// Patrick Westwood

// $('textarea').keyup(function() {
    
//     var characterCount = $(this).val().length,
//         current = $('#current'),
//         maximum = $('#maximum'),
//         theCount = $('#the-count');
      
//     current.text(characterCount);
// });

let submitBttn = document.getElementById('submitButton')
let txtArea = document.getElementById('textArea')

submitBttn.addEventListener('click', submitClear)

function submitClear()
{
    if (txtArea.value != '')
    {
        txtArea.innerHTML = ''
    }
    else
    {
        return
    }
}

$(document).ready(function() { //grayscale function
    $(".projectImg").mouseenter(function() {
      $("img").addClass("addingGrayScale");
    });
      $(".projectImg").mouseleave(function() {
      $("img").removeClass("addingGrayScale");
    });
  });

function isValid() 
{
    let valid = true;
    
    valid &= fieldValidation(fields.fName, isNotEmpty);
    valid &= fieldValidation(fields.ltName, isNotEmpty);
    valid &= fieldValidation(fields.textArea, isNotEmpty);
   
    return valid;
}

function isNotEmpty(value) 
{
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}
