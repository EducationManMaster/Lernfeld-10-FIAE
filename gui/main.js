function changePeople() {

  var slider = document.getElementById("people_slider");
  var value = document.getElementById("people_value");

  value.innerHTML = slider.value;

}

function submitPeople() {

  var slider = document.getElementById("people_slider");

  console.log(slider.value);

}

function selectBox(elmt) {

  elmt.getElementsByTagName("input")[0].click();


}



// ---------------------------------------------------------------------------
//

function settingsON() {

  var settings = document.getElementById("settings_wrapper");
  var blocker  = document.getElementById("settings_blocker");
  var menu     = document.getElementById("settings");

  settings.style.display = "inline-block";
  blocker.className = "setting_in";
  menu.className = "menu_in";


}

function settingsOFF() {

  var settings = document.getElementById("settings_wrapper");
  var blocker  = document.getElementById("settings_blocker");
  var menu     = document.getElementById("settings");

  blocker.className = "setting_out";
  menu.className = "menu_out";

  setTimeout(function(){ settings.style.display = "none"; }, 310);

}




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

function test(element, wert) {

  var elm = document.getElementById(element.toLowerCase());
  var value = elm.getElementsByClassName("tile_value")[0];
  var state = elm.getElementsByClassName("tile_footer")[0];

  if(wert < 2000){                        testGood(value, state, wert);
  }else if(wert >= 2000 && wert <= 4000){ testWarn(value, state, wert);
  }else{                                  testBad(value, state, wert); }

}

function testGood(value, state, wert) {

  value.innerHTML = wert;
  state.className = "tile_footer tile_footer_good";

  setInfo("g")

}

function testWarn(value, state, wert) {

  value.innerHTML = wert;
  state.className = "tile_footer tile_footer_warn";

  setInfo("w")

}

function testBad(value, state, wert) {

  value.innerHTML = wert;
  state.className = "tile_footer tile_footer_bad";

  setInfo("b")

}



// ---------------------------------------------------------------------------
//

function applyGUI() {

  var tile = document.getElementsByClassName("tile");
  var body = document.getElementById("main_wrapper");

  for (var i = 0; i < tile.length; i++) {

    if(tile[i].className.includes("tile_small")){

      tile[i].style.height = tile[i].offsetWidth + "px";

    }else{

      tile[i].style.height = ((tile[i].offsetWidth / 2) - 12) + "px";

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
