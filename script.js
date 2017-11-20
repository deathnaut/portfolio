$(document).ready(function () {
  console.log("javascript connected");
  $(".main").addClass("load");
  $(".projects").addClass("load");

  $('#kollaboscope').click(function(){
    $('#kollaboscope').animate();
    console.log('a message should appear...');
    $('#button-msg').show("slow");
    console.log('redirecting...');
    setTimeout(function () {
      window.location.href = "https://kollaboscope-183217.firebaseapp.com/";
    }, 2000);
  });

  $('#nommad').click(function(){
    $('#nommad').animate();
    console.log('a message should appear...');
    $('#button-msg').show("slow");
    console.log('redirecting...');
    setTimeout(function () {
      window.location.href = "https://nommad-app.firebaseapp.com/";
    }, 2000);
  });

});
