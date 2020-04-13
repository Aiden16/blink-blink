
$("button").on("click",function(){


var randomNumber=Math.floor(Math.random()*4+1);

switch (randomNumber) {
  case 1:
    $("body").css("background-color","red");
    break;
  case 2:
  $("body").css("background-color","yellow");
  break;
  case 3:
  $("body").css("background-color","blue");
  break;
  case 4:
  $("body").css("background-color","purple");
  break;
  default:


}

});
