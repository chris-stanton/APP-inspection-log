
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
            data: [12, 19, 30, 5, 10, 90, 25, 70, 10, 20, 30, 15],
            backgroundColor: [
                "transparent"
            ],
            borderColor: [
                '#3777f1'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        } // end of scale
    } // end of options
  }); // end of myChart


}); // end controller code block
