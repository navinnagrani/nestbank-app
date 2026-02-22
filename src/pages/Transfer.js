import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Transfer() {

  const navigate = useNavigate();

  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleTransfer = async () => {
    setMessage("");
    setError("");

    try {
      await API.post("/payments/transfer", {
        fromAccount: Number(fromId),
        toAccount: Number(toId),
        amount: Number(amount)
      });

      setMessage("Transfer completed successfully!");
      setFromId("");
      setToId("");
      setAmount("");

    } catch (err) {
      setError(err.response?.data?.error || "Transfer failed");
    }
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
      <div className="card">
        <h2 className="form-title">Transfer Money</h2>

        <div className="transfer-info">
          Enter sender account, receiver account, and transfer amount.
        </div>

        {message && <div className="message-success">{message}</div>}
        {error && <div className="message-error">{error}</div>}

        <div className="transfer-section">

          <div className="transfer-row">
            <input
              className="input"
              placeholder="From Account ID"
              value={fromId}
              onChange={(e) => setFromId(e.target.value)}
            />
            <span className="transfer-arrow">→</span>
            <input
              className="input"
              placeholder="To Account ID"
              value={toId}
              onChange={(e) => setToId(e.target.value)}
            />
          </div>

          <input
            className="input amount-input"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button
            className="button transfer-button"
            onClick={handleTransfer}
          >
            Transfer Funds
          </button>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Transfer;