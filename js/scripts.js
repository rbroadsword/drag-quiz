$(document).ready(function() {
  $("#dragForm").submit(function(event) {
    event.preventDefault();
    const dragName = $("input#dragName").val();
    const dragMom = parseInt($("#dragMom").val());
    const dragAesthetic = parseInt($("#dragAesthetic").val());
    const trademark = parseInt($("input:radio[name=trademark]:checked").val());
    const competition = parseInt($("input:radio[name=competition]:checked").val());
    const dragMovie = parseInt($("#dragMovie").val());
    const result = dragMom + dragAesthetic + trademark + competition + dragMovie;
    console.log(result);

    if(result <= 5) {
      $(".dragName").text(dragName);
      $("#lang-1").toggle();
      $(".main").toggle();
    } else if (result > 5 && result <= 15) {
      $(".dragName").text(dragName);
      $("#lang-2").toggle();
      $(".main").toggle();
    }else if (result > 15 && result <= 25) {
      $(".dragName").text(dragName);
      $("#lang-3").toggle();
      $(".main").toggle();
    }else if (result > 25) {
      $(".dragName").text(dragName);
      $("#lang-4").toggle();
      $(".main").toggle();
    }
  });
  $(".bunny").click(function(){
    $("#lang-1").hide();
    $("#lang-2").hide();
    $("#lang-3").hide();
    $("#lang-4").hide();
    $(".main").show();
  });
  $(".jackie").click(function(){
    $("#lang-1").hide();
    $("#lang-2").hide();
    $("#lang-3").hide();
    $("#lang-4").hide();
    $(".main").show();
  });
  $(".coco").click(function(){
    $("#lang-1").hide();
    $("#lang-2").hide();
    $("#lang-3").hide();
    $("#lang-4").hide();
    $(".main").show();
  });
  $(".divine").click(function(){
    $("#lang-1").hide();
    $("#lang-2").hide();
    $("#lang-3").hide();
    $("#lang-4").hide();
    $(".main").show();
  });
});