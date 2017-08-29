
myApp.controller('DashboardController', function() {
  console.log('DashboardController running');
  
  var self = this;
// monthy inspections totals chart
  var ctx = document.getElementById("myChart");

  self.message = 'angular sourced';

// Monthly inspection totals chart
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'Number Of Inspections',
            hidden: false,
            data: [12, 19, 30, 5, 10, 90, 25, 70, 10, 20, 30, 15],
            backgroundColor: [
                "#3777f1"
            ],
            borderColor: [
                '#3777f1'
            ],
            pointHoverRadius: 10,
            pointHoverBorderColor: '#3777f1',
            pointBackgroundColor: '#80ff00',
            borderWidth: 4,
            fill: false
        }] // end of dataset
    },
    options: {
      tooltips: {
        titleFontColor: '#05ff00',
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
            color: "rgba(128, 128, 128, 0.3)"
          },
          ticks: {
            beginAtZero:false,
            fontSize: 15,
            fontColor: '#000000',
            padding: 10
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#00000',
            fontSize: 15
          }
        }]
      } //end scales
    } //end options
  }); // end of myChart


}); // end controller code block
