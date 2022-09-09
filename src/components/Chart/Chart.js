import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  let points = props.chart;
  const values = points.map((point) => point.value);
  const maximum = Math.max(...values);
  return (
    <div className="chart">
      {points.map((point) => (
        <ChartBar
          value={point.value}
          maxValue={maximum}
          label={point.label}
          key={point.label}
        />
      ))}
    </div>
  );
}

export default Chart;
