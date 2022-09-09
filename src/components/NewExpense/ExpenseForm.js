import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  // let [title, setTitle] = useState("");
  // let [amount, setAmount] = useState("");
  // let [date, setDate] = useState("");
  // Combined State
  let [userInput, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleHandler = (e) => {
    let inputValue = e.target.value;
    // setInput({
    //   ...userInput,
    //   title: inputValue,
    // });
    setInput((prevState) => {
      return { ...prevState, title: inputValue };
    });
    // setTitle(inputValue);
  };

  const amountHandler = (e) => {
    let inputValue = e.target.value;
    // setInput({
    //   ...userInput,
    //   amount: inputValue,
    // });
    setInput((prevState) => {
      return { ...prevState, amount: inputValue };
    });
    // setAmount(inputValue);
  };

  const dateHandler = (e) => {
    let inputValue = new Date(e.target.value);
    // setInput({
    //   ...userInput,
    //   date: inputValue,
    // });
    setInput((prevState) => {
      return { ...prevState, date: inputValue };
    });
    // setDate(inputValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = userInput;
    props.onSubmitForm(expenseData); //Trigger the Function <===
    setInput({
      title: "",
      amount: "",
      date: "",
    });
    props.onCancel()
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={userInput.title}
            onChange={titleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            onChange={amountHandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
            // value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
}
