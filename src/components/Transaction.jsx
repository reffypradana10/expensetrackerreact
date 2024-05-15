import React, { useContext } from "react";
import { GlobalContext } from "../contact/GlobalState";
import TransactionItem from "./TransactionItem";
const Transaction = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transactions) => (
          <TransactionItem key={transactions.id} transactions={transactions} />
        ))}
      </ul>
    </>
  );
};

export default Transaction;
