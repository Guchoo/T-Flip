var data = {
    labels: ["Average", "Class best", "You"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "#BF604B",
            strokeColor: "#BF604B",
            highlightFill: "#D97F77",
            highlightStroke: "#D97F77",
            data: [4, 10, 2]
        }
    ]
};

var ctx = document.getElementById("myChart").getContext("2d");
var myBarChart = new Chart(ctx).Bar(data);
