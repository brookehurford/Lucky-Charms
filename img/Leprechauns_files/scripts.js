$(document).ready(function() {
  $(".clickable1").click(function() {
    $(".hide-rainbow").toggle();
    $(".show-rainbow").toggle();
  });
  $(".clickable2").click(function() {
    $(".hide-charms").toggle();
    $(".show-charms").toggle();
  });
  $(".clickable3").click(function() {
    $(".hide-gold").toggle();
    $(".show-gold").toggle();
  });

  $(".clickable1").click(function() {
    $(".rainbow").toggle();
    $(".leps").toggle();
  });
  $(".clickable2").click(function() {
    $(".charms").toggle();
    $(".leps").toggle();
  });
  $(".clickable3").click(function() {
      $(".gold").toggle();
      $(".leps").toggle();
    });
});
