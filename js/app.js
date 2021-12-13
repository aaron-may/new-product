$('header a').click(function(event){

  // prevent defalt click behavior
  // don't jump to content
  event.preventDefault();

  // identify position of target
  let target = $(this).attr('href');
  let top = $(target).offset().top;

  // animate scroll to target
  // set speed in ms
  $('html,body').animate({
    scrollTop: top
    },700);

});

/* EMAIL FORM HANDLING */

$('form').submit(function(e){
  // do not submit form
  e.preventDefault();
  // save value if the form field is not blank or the default
  if( $('#email').val() !== '' && $('#email').val() !== 'Email' ){
    // store value added to field in a variable
    let val = $('#email').val();
    // add email address to message
    $('.form-confirmation-message span').text(val);
    // show message (initially hidden with "hide" class)
    $('.form-confirmation-message').removeClass('hide');
    // hide input
    $('.form-input').addClass('hide');
  }
})