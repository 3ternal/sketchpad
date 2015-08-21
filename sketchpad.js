$(document).ready(function() {

  for (var row = 1; row <= 16; row++)
  {
    $(".wrapper").append("<tr>");
  }
  for (var column = 1; column <= 16; column++)
  {
    $("tr").append("<td><div class=square></div></td>");
  }

  $("tr").wrapAll('<table></table>');
  $(".square").css("padding-bottom", $("td").width())

  $(window).on("resize", function(){
    var paddingBottom = $("td").width();
    console.log(paddingBottom);
    $(".square").css("padding-bottom", paddingBottom);
  });


  $(".wrapper").on("mouseover", ".square", function()
  {
    console.log("hii");
    $(this).css("background-color", "blue")
  });

  $("#new_grid").click(function() {
    var newGrid = Number(prompt("How many rows?"));

    if (isNaN(newGrid))
    {
      console.log(newGrid);
      alert("Please enter a number.");
    }

    if (!isNaN(newGrid))
    {
      $("table").remove();

      for (var row = 1; row <= newGrid; row++)
      {
        $(".wrapper").append("<tr>");
      }
      for (var column = 1; column <= newGrid; column++)
      {
        $("tr").append("<td><div class=square></div></td>");
      }

      $("tr").wrapAll('<table></table>');
      $(".square").css("padding-bottom", $("td").width())
    }
  });

});
