import React, { useEffect, useState } from "react";
import API from "../api/api";
import Sidebar from "../components/Sidebar";
import { jwtDecode } from "jwt-decode";

function TransactionHistory() {

  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {

      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      const customerId = decoded.customerId;

      const response = await API.get(
        `/transactions/customer/${customerId}`
      );

      if (Array.isArray(response.data)) {
        setTransactions(response.data);
      } else {
        setError("No Transactions Found");
      }

    } catch (err) {
      setError("Failed to fetch transactions");
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <h2>Transaction History</h2>

        {error && <div className="message-error">{error}</div>}

        {transactions.length === 0 ? (
          <p>No transactions found.</p>
        ) : (
          <table style={{ width: "100%", marginTop: "20px", background: "white" }}>
            <thead>
              <tr style={{ background: "#f1f3f5" }}>
                <th>ID</th>
                <th>From</th>
                <th>To</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td>{tx.id}</td>
                  <td>{tx.fromAccount}</td>
                  <td>{tx.toAccount}</td>
                  <td>₹ {tx.amount}</td>
                  <td>{tx.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default TransactionHistory;