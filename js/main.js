var DataModel = Backbone.Model.extend({});

  var DataCollection = Backbone.Collection.extend({
    model: DataModel
  });

  var DataView = Backbone.View.extend({
    el: '#container',
    initialize: function(options) {
      this.data = options.data;
    },
    render: function() {
      this.$el.highcharts({
        
        xAxis: {
          categories: ['1980', '1985', '1990', ' 1995', '2000'
          ]
        },
        yAxis: {
          title: {
            text: 'sales'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        
        
        series: this.data.toJSON()
      });
    }
  });

  var items = new DataCollection([{
    data: [14000, 22000, 104000 , 87000 , 43400 ]
  }]);

  var view = new DataView({
    data: items
  });

  view.render();








/*let myChart = document.getElementById('myChart').getContext("2d");

let Sale = new Chart(myChart, {
    type: "line",
    data:{
        labels:[ 1980, 1985, 1990,  1995, 2000],
        datasets:[{
            label:"Sales",
            data:[
             14000, 
             22000,
            104000, 
             87000, 
             43400 
            ],
            
        }]
    },
    options:{}
});*/