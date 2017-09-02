
myApp.controller('DashboardController',['FactoryFactory',function(FactoryFactory) {
  console.log('DashboardController Running...');

  var self = this;

  self.message = 'angular sourced';

// monthy inspections totals chart by id
  var ctx = document.getElementById("myChart");
// Monthly inspection totals chart
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: 'Number of Total Inspections Monthly',
            hidden: false,
            data: [12, 19, 30, 5, 10, 90, 25, 70, 10, 20, 30, 15],
            backgroundColor: [
                '#3777f1'
            ],
            borderColor: [
                '#3777f1'
            ],
            pointHoverRadius: 7,
            pointHoverBorderColor: '#3777f1',
            pointBackgroundColor: '#000000',
            borderWidth: 3,
            fill: false
          }
        ] // end of dataset
    },
    options: {
      tooltips: {
        titleFontColor: '#ffffff',
        titleFontSize: 15,
        titleFontStyle: 'italic',
        titleMarginBottom: 10,
        bodyFontSize: 18,
        // callbacks: {
        //   label: function(tooltipItem, data) {
        //     var datasetLabel = 'Summary';
        //
        //     return datasetLabel + ': ' + label;
        //   }
        // }
      },

      legend: {
        position: 'top',
        labels: {
          fontColor: '#000000',
          padding: 30,
          fontSize: 15,
          boxWidth: 12
        }
      },

      scales: {
        yAxes: [{
          gridLines: {
            display: true,
            color:'rgba(128, 128, 128, 0.3)'
          },
          ticks: {
            beginAtZero:false,
            fontSize: 15,
            fontColor: '#000000',
            padding: 0
          }
        }],
        xAxes: [{
          gridLines: {
            display: true,
            color:'rgba(128, 128, 128, 0.3)'
          },
          ticks: {
            fontColor: '#00000',
            fontSize: 15
          }
        }]
      } //end scales
    } //end options
  }); // end of myChart


}]); // end controller code block
