var data = {
    datasets: [{
        data: [
            10,
            30,
            3,
            2,
            5
        ],
        backgroundColor: [
            "#000000",
            "#3B5998",
            "#a6b1b7",
            "#1da1f2",
            "#bd081c"
        ],
        label: 'My dataset', // for legend
    }],
    labels: [
        "Blog",
        "Facebook",
        "Instagram",
        "Twitter",
        "Pinterest"
    ],
};
var ctx = $("#myChart");
new Chart(ctx, {
    data: data,
    type: 'polarArea',
    options: {
      legend: {
        display: false,
      },
      scale: {
        display: false
      }
    }
});