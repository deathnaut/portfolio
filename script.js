$(document).ready(function () {
  console.log("javascript connected");
  $('.main').addClass('load');
  $('.projects').addClass('load');

  $('.project').click(function(){
    var $this = $(this);
    var showing = $this.css('min-height');
    if (showing == '100%'){
      $this.animate({ minHeight: '0%' }, 500);
    } else {
      $this.animate({ minHeight: '100%' }, 500);
    }
  });

  $('#synchrono').click(function(){
    $('#synchrono').animate();
    console.log("a message should appear...");
    $('#button-msg').show("slow");
    console.log('redirecting...');
    setTimeout(function () {
      window.location.href = "https://synchrono-km.firebaseapp.com/";
    }, 2000);
  });

  $('#kollaboscope').click(function(){
    $('#kollaboscope').animate();
    console.log("a message should appear...");
    $('#button-msg').show("slow");
    console.log('redirecting...');
    setTimeout(function () {
      window.location.href = "https://kollaboscope-183217.firebaseapp.com/";
    }, 2000);
  });

  $('#nommad').click(function(){
    $('#nommad').animate();
    console.log("a message should appear...");
    $('#button-msg').show('slow');
    console.log("redirecting...");
    setTimeout(function () {
      window.location.href = "https://nommad-app.firebaseapp.com/";
    }, 2000);
  });

});
