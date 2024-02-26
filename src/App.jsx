import './App.css'
import Budgets from './features/Budgets'
import Transactions from './features/Transactions'

function App() {

  return (
    <div className='App'>
      <h1 className='App-header'>Expense Tracker</h1>
      <Budgets />
      <Transactions />
    </div>
  )
}

export default App;

