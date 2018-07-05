const eDefault=document.getElementById('emailHeader').innerHTML;
const other=document.getElementById('other').innerHTML;



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
    event.target.previousElementSibling.innerHTML= '<label class="error px=1" for="email" id="emailHeader">Your Email appears to be invalid</label>'
    console.log(event.target.previousElementSibling)
  }else{
    event.target.previousElementSibling.innerHTML = eDefault;
    console.log(event.target.previousElementSibling);}

});

$('#other_input').change(function(){
  onions = $(this).val().toUpperCase()
  console.log(onions)
  if (onions.indexOf("ONION") === -1){
    event.target.previousElementSibling.innerHTML= '<p class="error px=1">Please select something from the list</p>';
  } else if (onions.indexOf("ONION") >= 0) {
    event.target.previousElementSibling.innerHTML= '<p class="success px=1">We haven\'t heard of that. It sounds delicious!</p>';
  } else{
    event.target.previousElementSibling.innerHTML= other;
  }
})
