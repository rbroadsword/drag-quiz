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
  })
})