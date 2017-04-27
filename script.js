"use strict";
$(document).ready(function(){
  $("#el1").click(function(){
    $(this).hide();
    $("#el2").html("<img src='http://images.malwareteks.com/IEDefender/PopUp_Agent.akk.png'>")
  });
});
