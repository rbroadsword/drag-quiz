$(document).ready(function() {
  $("#dragForm").submit(function(event) {
    event.preventDefault();
    const dragName = $("input#dragName").val();
    console.log(dragName);
    const dragMom = parseInt($("#dragMom").val());
    console.log(dragMom);
    const dragAesthetic = parseInt($("#dragAesthetic").val());
    console.log(dragAesthetic);
    const trademark = $("input:radio[name=trademark]:checked").val();
    console.log(trademark);
    const competition = $("input:radio[name=competition]:checked").val();
    console.log(competition);
    const dragMovie = parseInt($("#dragMovie").val());
    console.log(dragMovie);
  })
})