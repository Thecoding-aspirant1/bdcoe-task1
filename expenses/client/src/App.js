import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import ExpenseForm from './expenseForm';
import ExpenseList from './expenseList';


const App = () => {
  const [expenses, setExpenses] = useState([]);

  
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <>
    <nav>
      
    <FontAwesomeIcon icon={faPiggyBank} className="logo" />
    <h1>ExpenseHUB</h1>
    
    </nav>
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <div id="total">
          <h2>Total Expenses:</h2>
          <p>Total Amount:</p>
          <p>${calculateTotal()}</p>
        </div>
    </div>
    </>
  );


};

export default App;



