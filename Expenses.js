import ExpenseItems from "./ExpenseItems"
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { useState } from "react";

const Expenses=(props)=>{
  const[filteredYear,setFilteredYear]=useState('2022');
  const filterChangeHandler=(selectedyear)=>{
      setFilteredYear(selectedyear);
  }
    return(
<Card className="expenses">
  <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
  {props.items.map(expense => 
      <ExpenseItems 
        key={props.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
      />)}
</Card>
    );

}
export default Expenses;