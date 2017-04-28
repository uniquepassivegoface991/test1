"use strict";
$(document).ready(function(){
  $("#el1").click(function(){
    $(this).hide();
    $("#el2").show();
    for(var i=1;i<3;i++){
      alert("Twój komputer został zainfekowany, prosimy nie opuszczać tej strony!");
    }
  });
});
