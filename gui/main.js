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










var user_settings = {

  people:1,
  warnings:true,
  problems:true

};

var user_values = {

  power :{ avg:110,  warn:null, prob:null },
  water :{ avg:4000, warn:null, prob:null },
  gas   :{ avg:500,  warn:null, prob:null },
  carbon:{ avg:100,  warn:null, prob:null },

  warn:0.65,
  prob:1.20,

  calc:function() {

    user_values.power.warn  = Math.round((user_values.power.avg * user_settings.people) * user_values.warn);
    user_values.power.prob  = Math.round((user_values.power.avg * user_settings.people) * user_values.prob);

    user_values.water.warn  = Math.round((user_values.water.avg * user_settings.people) * user_values.warn);
    user_values.water.prob  = Math.round((user_values.water.avg * user_settings.people) * user_values.prob);

    user_values.gas.warn    = Math.round((user_values.gas.avg * user_settings.people) * user_values.warn);
    user_values.gas.prob    = Math.round((user_values.gas.avg * user_settings.people) * user_values.prob);

    user_values.carbon.warn = Math.round((user_values.carbon.avg * user_settings.people) * user_values.warn);
    user_values.carbon.prob = Math.round((user_values.carbon.avg * user_settings.people) * user_values.prob);

  }

};




var testData = [2, 3, 2, 4, 3, 5, 6, 1, 7, 3, 2, 4, 5, 2, 3, 2, 3, 5, 1, 4, 2];


function drawDaily(type = "power") {

  var canvas;
  var data;

  switch (type) {

    case "power":
      canvas = "canvas_day_power";
      data   = testData;
    break;

  }

  var l = (data.length - 7);
  if(l < 0){ l = 0; }

  var max = 0;
  for (var i = 0; i < l; i++) { if(data[i] > max){ max = data[i]; }}

  for (var i = 0; i < l; i++) {

    var w = c.width / l;
    //var h = 


  }

}


function drawMonthly(type = "power") {

  user_values.calc();

  var canvas;
  var warn;
  var prob;
  var data;

  switch (type) {

    case "power":
      canvas = "canvas_power";
      warn   = user_values.power.warn;
      prob   = user_values.power.prob;
      data   = testData;
    break;

  }

  var c = document.getElementById(canvas);

  c.width  = c.offsetWidth*2
  c.height = c.offsetHeight*2

  var ctx = c.getContext("2d");

  var w = (c.width  * 0.75) / data.length;
  var h = (c.height * 0.75) / 100;

  var dx = 0;
  var dy = c.height;

  var sum   = 0;
  var total = 0;

  for (var i = 0; i < data.length; i++) { total += data[i]; }
  for (var i = 0; i < data.length; i++) {

    sum += data[i];

    var x = (w * i);
    var y = (c.height - (h * ((100 / total) * sum)));

    ctx.strokeStyle = "#9CCC65";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.moveTo(dx, dy);
    ctx.lineTo(x, y);
    ctx.stroke();

    dx = x;
    dy = y;

  }

  ctx.setLineDash([10, 15]);
  ctx.moveTo(0, dy);
  ctx.lineTo(c.width, y);
  ctx.stroke();

  ctx.font = "30px Arial";
  ctx.fillStyle = "#9CCC65";
  ctx.fillText((sum + " kW/h"), dx, dy+35);

}
