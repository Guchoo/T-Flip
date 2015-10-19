var userColor = 'rgb(78, 173, 81)';
var data = {
    labels: ['Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5'],
    datasets: [
        {
            label: 'You',
            strokeColor: userColor,
            pointColor: userColor,
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: [92, 95, 100, 70, 60]
        },
        {
            label: 'Class mean',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [90, 85, 82, 85, 70]
        },
        {
            label: 'Required score',
            strokeColor: 'rgba(207, 92, 92, 1)',
            pointColor: 'rgba(207, 92, 92, 1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [80, 80, 80, 80, 80]
        }
    ]
};
var options = {
  bezierCurve: false,
  datasetFill: false,
  animationSteps: 40
};
// Get the context of the canvas element we want to select
var ctx = document.getElementById('classStatsChart').getContext('2d');
new Chart(ctx).Line(data, options);


data = [
    {
        value: 21,
        color: userColor,
        highlight: 'rgb(96, 179, 99)'
    },
    {
        value: 9,
        color: '#EEE',
        highlight: '#EEE'
    }
];
options = {
  animation: false
};
ctx = document.getElementById('assignmentProgressChart').getContext('2d');
// For a pie chart
new Chart(ctx).Pie(data, options);
