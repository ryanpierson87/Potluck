



$('#other').hide();

$('#drop').change(function(){
  opt = $(this).val();
  if(opt=="7"){
    $('#other').show();
  }else{
    $('#other').hide();
  }
});

$('#email').change(function(){
  field = $(this).val()
  if (field.indexOf("@") === -1){
    $('#efield').append("<p class=\"error mx-auto\" id=\"bad_email\">test</p>");
  }
});
