"use strict";
$(document).ready(function(){
 /* var image = document.getElementById("el2");
  var imgWidth = $("image").width();
  var imgHeight = $("image").height();
  var bodyWidth = $("document").width();
  var bodyHeight = $("document").height();
  
  $("el2").css("margin-top", bodyHeight/2-imgHeight);
  $("el2").css("margin-left", bodyWidth/2-imgWidth); */
  $("#clickMe").click(function(){
    $(this).hide();
    setTimeout($("#v1").show(0);, 500);
    setTimeout($("#v2").show(0);, 500);
    setTimeout($("#v3").show(0);, 500);
  });
});
