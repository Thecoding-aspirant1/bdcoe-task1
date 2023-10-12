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
       <section id="viewExpenses">
            <h2>View Expenses</h2>
            <ul id="expenseList"></ul>
            <p>Total Expenses: $<span id="totalExpenses">0.00</span></p>
            <h3>Amount Owed by Each Friend</h3>
            <ul id="owedList"></ul>
        </section>
    </div>

  );
}

export default App;
