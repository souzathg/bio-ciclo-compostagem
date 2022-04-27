let chartConfigUmidade = {
  type: "line",
  plotarea: {
    margin: "dynamic",
    adjustLayout: true,
  },

  csv: {
    //   url: "https://storage.googleapis.com/studio-assets/resources/fruitcsv.txt",
    url: "./csv/ph.csv",
    "row-separator": ";",
    title: true,
  },

  scaleY: {
    values: "5:10",
    label: { text: "pH" },

    markers: [
      {
        type: "line",
        range: [6.5],
        lineColor: "#7F9838",
        lineWidth: 2,
        label: { text: "6,5" },
      },
      {
        type: "line",
        range: [8],
        lineColor: "#7F9838",
        lineWidth: 2,
        label: { text: "8" },
      },
    ],
  },
  scaleX: {
    zooming: true,
    "zoom-to": [0, 60],
    label: { text: "n° medida" },
  },

  "scroll-x": {
    bar: {
      "background-color": "#DCEDC8",
      alpha: 0.5,
    },
  },
  plot: {
    // Animation docs here:
    // https://www.zingchart.com/docs/tutorials/styling/animation#effect
    animation: {
      effect: "ANIMATION_EXPAND_BOTTOM",
      method: "ANIMATION_STRONG_EASE_OUT",
      sequence: "ANIMATION_BY_NODE",
      sequence: "ANIMATION_BY_PLOT_AND_NODE",
      speed: 175,
    },
  },
};

zingchart.render({
  id: "myChartUmidade",
  data: chartConfigUmidade,
  height: 400,
  width: "100%",
});
