"use strict";
$(document).ready(function(){
  var image = document.getElementById("el2");
  var imgWidth = image.ClientWidth;
  var imgHeight = image.ClientHeight;
  
  $("el2").css("top", calc(50%-imgHeight));
  $("el2").css("left", calc(50%-imgWidth));
  
  $("#el1").click(function(){
    $(this).hide();
    $("#el2").show();
      alert("Twój komputer został zainfekowany, prosimy nie opuszczać tej strony!");
  });
});
