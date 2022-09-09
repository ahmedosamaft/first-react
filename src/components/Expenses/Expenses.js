import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const [filteredYear, setFilterYear] = useState("2022");
  let expenses = props.pushData;

  
  const filteredYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  
  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filteredYearHandler}
      />
      <ExpensesChart expenses={filterExpenses}/>
      <ExpensesList items={filterExpenses} />
    </Card>
  );
}
