if(document.querySelector('.mod-slider')){
  $('.mod-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    //content of button can be changed here by replacing arrow symbols
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow:'<button type="button" class="slick-next">></button>'
  });
}

// $('.page-login-return').click(function()
// /*$('card-swipe').toggleClass('spin');*/

// $('form').submit(function(e){
//   // do not submit form
//   e.preventDefault();
//   // save value if the form field is not blank or the default
//   if( $('#email').val() !== '' && $('#email').val() !== 'Email' ){
//     // store value added to field in a variable
//     let val = $('#email').val();
//     // add email address to message
//     $('.form-confirmation-message span').text(val);
//     // show message (initially hidden with "hide" class)
//     $('.form-confirmation-message').removeClass('hide');
//     // hide input
//     $('.form-input').addClass('hide');
//   }
// })

if(document.querySelector('.option-selector')){
  
  const form = document.querySelector('.option-selector');
  const labels = document.querySelectorAll('.option-selector input');
  const btn = document.querySelector('.select');

  form.reset();
  btn.disabled = true;

  labels.forEach(function(l){
    // enable button if at least one box has been checked
    l.addEventListener('click',function(e){
      btn.disabled = false;
    })
  })

  btn.addEventListener('click',function(e){
    e.preventDefault();
    location.href = 'product-modified.html';
  })
  
}
