import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  let filterExpenses = props.items;


  return <ul className="expenses-list">
    {filterExpenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        key={expense.id}
        amount={expense.amount}
        date={expense.date}
      />))}
  </ul>;
};

export default ExpensesList;
