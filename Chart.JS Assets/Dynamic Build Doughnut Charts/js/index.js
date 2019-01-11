fullDoughnutChart('Aboriginal', 33);
fullDoughnutChart('PWD', 66);
fullDoughnutChart('Women', 99);
halfDonughnutChart('Test', 33);

function fullDoughnutChart(chartId, progress) {
  var canvas = document.getElementById(chartId);
  var context = canvas.getContext('2d');

  var remaining = 100 - progress;
  var data = {
    labels: [ 'Current', 'Future', ],
    datasets: [{
      data: [progress , remaining],
      backgroundColor: [
        '#1A5336',
        '#008A00'
      ],
      borderColor: [
        '#FFFFFF',
        '#FFFFFF'
      ],
      hoverBackgroundColor: [
        '#105b34',
        '#008a2e'
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
        context.font = '22px Thasadith';
        context.fillStyle = 'black';
        context.fillText(progressLabel, xCenter, yCenter-10);
        context.fillText(chartId, xCenter, yCenter+10);
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

function halfDonughnutChart(chartId, progress) {
  var canvas = document.getElementById(chartId);
  var context = canvas.getContext('2d');

  var remaining = 100 - progress;
  var data = {
    labels: [ 'Current', 'Future', ],
    datasets: [{
      data: [progress , remaining],
      backgroundColor: [
        '#1A5336',
        '#008A00'
      ],
      borderColor: [
        '#FFFFFF',
        '#FFFFFF'
      ],
      hoverBackgroundColor: [
        '#105b34',
        '#008a2e'
      ]
    }]
  };

  var options = {
    responsive: false,
    maintainAspectRatio: false,
    scaleShowVerticalLines: false,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,

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
        context.font = '22px Thasadith';
        context.fillStyle = 'black';
        context.fillText(progressLabel, xCenter+3, yCenter*1.3);
        context.fillText(chartId, xCenter, yCenter*1.5);
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