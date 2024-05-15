import React from "react";

const TransactionItem = ({ transactions }) => {
  return (
    <li className="minus">
      {transactions.text}
      <span>-$400</span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default TransactionItem;
