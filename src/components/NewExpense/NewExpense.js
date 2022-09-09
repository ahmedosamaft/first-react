import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  let [isEditing, setIsEditing] = useState(false);

  const saveDataHandler = (zData) => {
    const expense = {
      ...zData,
      id: Math.random().toString(),
    };
    props.onUpData(expense);
  };
  const editHandler = () => {
    setIsEditing(true)
  }
  const stopEditing = () => {
    setIsEditing(false)
  }
  return (
    <div className="new-expense">
      {isEditing && <ExpenseForm onSubmitForm={saveDataHandler} onCancel={stopEditing} />}
      {!isEditing && <button onClick={editHandler}>Add New Expense</button>}
    </div>
  );
}
