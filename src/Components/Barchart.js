import React from "react";
import Chart from "react-apexcharts";

export const data = [
  {
    name: "Income",
    data: [44, 55, 57, 56, 61, 58],
  },
  {
    name: "Expenses",
    data: [76, 85, 101, 98, 87, 105],
  },
];

export const options = {
  chart: {
    id: "bar-chart",
    type: "bar",
    height: 350,
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      endingShape: "rounded",
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Jan", "Feb", "March", "Apr", "May", "Jun"],
    labels: {
      style: {
        colors: "white",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "white",
      },
    },
  },
  title: {
    text: "Revenue Report",
    style: {
      color: "white",
      fontSize: "20px",
      fontWeight: "bold",
    },
  },
  legend: {
    position: "top",
    labels: {
      colors: ["white", "white"],
    },
  },
  tooltip: {
    theme: "dark",
    x: {
      show: true,
      format: "MMM",
    },
    y: {
      formatter: function (value) {
        return `$${value}`;
      },
    },
  },
};

function Barchart() {
  console.log(data);
  return (
    <Chart
      options={options}
      series={data}
      type="bar"
      width="100%"
      height={window.innerWidth <= 768 ? 600 : 400}
    />
  );
}

export default Barchart;
