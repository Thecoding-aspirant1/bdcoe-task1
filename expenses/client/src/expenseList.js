import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <strong>{expense.description}</strong> - ${expense.amount} - {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
