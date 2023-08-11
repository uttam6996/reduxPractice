import './App.css';
import { useState } from 'react'; // Import useState
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { RootState } from './state/reducers';

function App() {
  const state = useSelector((state: RootState) => state.bank);
  console.log("state", state);
  
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  const [amount, setAmount] = useState(0); 

  const handleDeposit = () => {
    depositMoney(amount);
    setAmount(0); // Clear the input field after deposit
  };

  const handleWithdraw = () => {
    withdrawMoney(amount);
    setAmount(0); // Clear the input field after withdrawal
  };
  return (
    <div className="App">
      <h1>{state}</h1>
      
      {/* Input field for entering the amount */}
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      {/* Buttons with dynamic values */}
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
