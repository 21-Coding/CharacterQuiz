var which = function(total) {
  if (total <= 7) {
    return "jackie";
  } else if (total <= 14) {
    return "fez";
  } else if (total <= 21) {
    return "eric";
  } else if (total <= 28) {
    return "michael";
  } else if (total <= 35) {
    return "steven";
  } else  {
    return "donna";
  }
}

$(document).ready(function() {
  $("button#go").click(function() {
    var color = parseInt($("#color").val());
    var season = parseInt($("#season").val());
    var meal = parseInt($("#meal").val());
    var movie = parseInt($("#movie").val());

    var results = color + season + meal + movie;
    console.log(results);
    console.log(which(results));
  })
})
