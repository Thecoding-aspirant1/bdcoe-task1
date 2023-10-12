import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
       <div className="addExpense">
        <h2>Add Expenses</h2>
        <label forhtml="description">Description:</label>
        <input type="text" id="description" placeholder="Enter Description" required/>

        <label forhtml="amount">Amount:</label>
            <input type="number" id="amount" placeholder="Enter amount" required/>

        <label forhtml="date">Date:</label>
        <input type="date" id="date" required/>    

        <button onclick="addExpense()">Add Expense</button>
       </div>
    </div>

  );
}

export default App;
