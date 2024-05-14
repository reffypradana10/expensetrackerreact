import "./App.css";
import Addtransaction from "./components/Addtransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpensive from "./components/incomeExpensive";
import Transaction from "./components/Transaction";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpensive />
        <Transaction />
        <Addtransaction />
      </div>
    </div>
  );
}

export default App;
