$(document).ready(function(){
  $("#changeColor").click(function(){
    const colors = ["#ff8a80","#ffd180","80d8ff","ccff90"];
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    $("body").css("background-colo", randomColor);
  });
}):
