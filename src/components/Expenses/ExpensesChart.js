import React from "react";
import Chart from "../Chart/Chart";

export default function ExpensesChart(props) {
  const chartData = [
    { label: "jan", value: "0" },
    { label: "feb", value: "0" },
    { label: "mar", value: "0" },
    { label: "apr", value: "0" },
    { label: "may", value: "0" },
    { label: "jun", value: "0" },
    { label: "Jul", value: "0" },
    { label: "aug", value: "0" },
    { label: "sep", value: "0" },
    { label: "oct", value: "0" },
    { label: "nov", value: "0" },
    { label: "dec", value: "0" },
  ];
  for (let expense of props.expenses) {
    const expnseMonth = new Date(expense.date).getMonth();
    chartData[expnseMonth].value += expense.amount;
  }

  return <Chart chart={chartData} />;
}
