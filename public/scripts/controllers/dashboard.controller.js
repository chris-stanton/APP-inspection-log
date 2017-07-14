
myApp.controller('DashboardController', function() {
  console.log('DashboardController running');

  var self = this;
  var ctx = document.getElementById("myChart");

  self.message = 'angular sourced';

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: '# of Inspection',
            data: [12, 19, 3, 5, 2, 3, 6, 7, 8, 20, 11, 15],
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
