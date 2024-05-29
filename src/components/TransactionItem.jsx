import React, { useState } from "react";
import { GlobalContext } from "../contact/GlobalState";
import { useContext } from "react";

const TransactionItem = ({ transactions }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transactions.amount < 0 ? "-" : "+";
  return (
    <li className={transactions.amount < 0 ? "minus" : "plus"}>
      {transactions.text}
      <span>
        {sign}${Math.abs(transactions.amount)}
      </span>
      <button onClick={() => deleteTransaction(transactions.id)} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default TransactionItem;
