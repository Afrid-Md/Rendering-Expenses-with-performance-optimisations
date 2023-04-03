import React from "react";
import Expenses from "./Components/Expenses/Expenses.js";
import NewExpense from "./Components/NewExpense/NewExpense.js";
import { useState } from "react";

const DUMMY_EXPENSES=[
  
    { id: "e1", title: "Food", amount: 10, date: new Date(2023, 7, 29) },
    { id: "e2", title: "Movie", amount: 200, date: new Date(2023, 10, 2) },
    { id: "e3", title: "Petrol", amount: 100, date: new Date(2023, 8, 9) },

]
const App = () => {
  const[expenses, setExpenses]=useState(DUMMY_EXPENSES);


  const addExpenseHandler = (expense) => {
      setExpenses((prevExpense)=>{
        return [expense, ...prevExpense];
      });
  };
  // return(
  //   React.createElement('div',{},React.createElement('h2',{},'JS Itroduction'),
  //   React.createElement(Expenses, {items:expenses}))
  // )
  return (
    <div>
      <center>
        <NewExpense onAddExpense={addExpenseHandler} />
      </center>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
