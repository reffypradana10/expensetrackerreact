import "./App.css";
import Addtransaction from "./components/Addtransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpensive from "./components/incomeExpensive";
import Transaction from "./components/Transaction";

import { GlobalProvider } from "./contact/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpensive />
        <Transaction />
        <Addtransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
