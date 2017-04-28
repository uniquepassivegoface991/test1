"use strict";
$(document).ready(function(){
  var image = document.getElementById("el2");
  var imgWidth = $("image").width();
  var imgHeight = $("image").height();
  var bodyWidth = $("document").width();
  var bodyHeight = $("document").height();
  
  $("el2").css("top", bodyHeight/2-imgHeight);
  $("el2").css("left", bodyWidth/2-imgWidth);
  
  $("#el1").click(function(){
    $(this).hide();
    $("#el2").show();
      alert("Twój komputer został zainfekowany, prosimy nie opuszczać tej strony!");
  });
});
