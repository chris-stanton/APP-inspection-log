
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
            label: '# of inspection',
            data: [12, 19, 3, 5, 10, 3, 15, 7, 10, 20, 11, 15],
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
        }
    }
  });


}); // end controller code block
