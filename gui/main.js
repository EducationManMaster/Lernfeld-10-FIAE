window.addEventListener("resize", resizeGUI);
document.addEventListener("DOMContentLoaded", function() {

  setInfo("g");
  resizeGUI();
  plotEverything();

});









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
