setupChart('Aboriginal', 33);
setupChart('PWD', 66);
setupChart('Women', 99);

function setupChart(chartId, progress) {
  var canvas = document.getElementById(chartId);
  var context = canvas.getContext('2d');

  var remaining = 100 - progress;
  var data = {
    labels: [ 'Progress', '', ],
    datasets: [{
      data: [progress, remaining],
      backgroundColor: [
        '#1A5336',
        '#008A00'
      ],
      borderColor: [
        '#1A5336',
        '#008A00'
      ],
      hoverBackgroundColor: [
        '#008A00',
        '#1A5336'
      ]
    }]
  };

  var options = {
    responsive: false,
    maintainAspectRatio: false,
    scaleShowVerticalLines: false,

    cutoutPercentage: 70,
    legend: {
      display: false
    },
    animation: {
      onComplete: function (event) {
      	console.log(this.chart.height);
        var xCenter = this.chart.width/2;
        var yCenter = this.chart.height/2;

        context.textAlign = 'center';
        context.textBaseline = 'middle';

        var progressLabel = data.datasets[0].data[0] + '%';
         var targetPercent = 100;
         var label = chartId;
        context.font = '20px Helvetica';
        context.fillStyle = 'black';
        context.fillText(progressLabel, xCenter, yCenter-10);
        context.fillText("x% of Target", xCenter, yCenter+10);
      }
    }
  };

  Chart.defaults.global.tooltips.enabled = true;
  var chart = new Chart(context, {
    type: 'doughnut',
    data: data,
    options: options
  });
}