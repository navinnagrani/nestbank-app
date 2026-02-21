import React, { useState } from "react";
import API from "../api/api";

function Transfer() {
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async () => {
    try {
      await API.post("/payments/transfer", {
        fromAccountId: Number(fromId),
        toAccountId: Number(toId),
        amount: Number(amount)
      });

      alert("Transfer successful!");
    } catch (err) {
      alert("Transfer failed");
    }
  };

  return (
    <div>
      <h2>Transfer Money</h2>
      <input placeholder="From Account ID"
        onChange={(e) => setFromId(e.target.value)} />
      <input placeholder="To Account ID"
        onChange={(e) => setToId(e.target.value)} />
      <input placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
}

export default Transfer;