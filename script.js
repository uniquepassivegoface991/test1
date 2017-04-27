"use strict";
$(document).ready(function(){
  $("#el1").click(function(){
    $(this).hide();
    $("#el2").css("display='block'")
  });
});
