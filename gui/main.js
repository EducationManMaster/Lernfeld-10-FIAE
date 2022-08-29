// ---------------------------------------------------------------------------
// Funktion zum setzen der Infotafel

function setInfo(state) {

  var color = document.getElementById("header");
  var icon  = document.getElementById("header_info_icon");
  var info  = document.getElementById("header_info_status");
  var text  = document.getElementById("header_info_text");

  switch (state) {

    case "g":

      color.className = "header_good";
      icon.className  = "header_info_icon_good";
      info.innerHTML  = "Ausgezeichnet";
      text.innerHTML  = "Alle Werte sind im grünen Bereich.";

    break;

    case "w":

      color.className = "header_warn";
      icon.className  = "header_info_icon_warn";
      info.innerHTML  = "Warnung";
      text.innerHTML  = "Bei gleichbleibendem Verbrauch werden die Nutzungswerte überschritten.";

    break;

    case "b":

      color.className = "header_bad";
      icon.className  = "header_info_icon_bad";
      info.innerHTML  = "Problem erkannt";
      text.innerHTML  = "Nutzungswerte wurden für diesen Monat überschritten.";

    break;

  }

}



// ---------------------------------------------------------------------------
//

function applyGUI() {

  var tile = document.getElementsByClassName("tile");

  for (var i = 0; i < tile.length; i++) {

    if(tile[i].className.includes("tile_small")){

      tile[i].style.height = tile[i].offsetWidth + "px";

    }else{

      tile[i].style.height = ((tile[i].offsetWidth / 2) - 12.5) + "px";

    }



  }

}



window.addEventListener("resize", function() {
  applyGUI();
})
document.addEventListener("DOMContentLoaded", function() {

  setInfo("g");
  applyGUI();

});
