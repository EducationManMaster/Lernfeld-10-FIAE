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

var user_data = {

  power: [2, 3, 2, 4, 3, 5, 6, 1, 7, 3, 2, 4, 5, 2, 3, 2, 3, 5, 15, 4, 4, 1, 5, 3, 2, 4, 1, 5, 3, 2],
  water: [120, 140, 131, 111, 100, 160, 220, 132, 120, 120, 140, 131, 111, 100, 160, 220, 132, 120, 120, 140, 131, 111, 100, 160, 220, 132, 250],
  gas:   [2, 3, 2, 4, 3, 5, 6, 1, 7, 3, 2, 4, 5, 2, 3, 2, 3, 5, 15, 4, 4, 1, 5, 3, 2, 4, 1, 5, 3, 2],
  carbon:[]

};
