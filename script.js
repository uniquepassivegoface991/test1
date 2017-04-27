"use strict";
$(document).ready(function(){
  $("#el1").click(function(){
    $(this).hide();
    $("#el2").show();
    alert("Twój komputer został zainfekowany, prosimy nie opuszczać tej strony!");
  });
});
