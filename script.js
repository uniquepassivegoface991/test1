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
    $("#v1").delay(500).show();
    $("#v2").delay(500).show();
    $("#v3").delay(500).show();
  });
});
