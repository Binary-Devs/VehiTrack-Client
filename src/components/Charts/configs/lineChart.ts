const lineChart = {
  series: [
    {
      name: "Petrol",
      data: [350, 40, 300, 220, 500, 250, 400, 230, 500, 420, 300, 500],
      offsetY: 0,
    },
    {
      name: "Diesel",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400, 350, 450, 400],
      offsetY: 0,
    },
  ],

  options: {
    chart: {
      width: "100%",
      height: "auto",
      type: "area",
      toolbar: {
        show: false,
      },
    },

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: ["#8c8c8c"],
        },
      },
    },

    xaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: [
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
          ],
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
    },

    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + " Liter";
        },
      },
    },
  },
};

export default lineChart;
