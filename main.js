
    var Chart = Backbone.Model.extend({});
    
    let myChart = document.getElementById('myChart').getContext("2d");

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
    });