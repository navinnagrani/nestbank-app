import React, { useEffect, useState } from "react";
import API from "../api/api";
import Sidebar from "../components/Sidebar";
import { jwtDecode }from "jwt-decode";

function AccountSummary() {

  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const username = decoded.sub;

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        const customerId = decoded.customerId;
        const response = await API.get(`/accounts/customer/${customerId}`);
        setAccounts(response.data);
    } catch (err) {
      setError("Failed to fetch accounts");
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <h2>Account Summary</h2>
        <p>Welcome, {username}</p>

        {error && <div className="message-error">{error}</div>}

        {accounts.length === 0 ? (
          <p>No accounts found.</p>
        ) : (
          <table style={{ width: "100%", marginTop: "20px", background: "white", borderRadius: "8px" }}>
            <thead>
              <tr style={{ background: "#f1f3f5" }}>
                <th style={{ padding: "10px" }}>Account ID</th>
                <th style={{ padding: "10px" }}>Balance</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((acc) => (
                <tr key={acc.id}>
                  <td style={{ padding: "10px", textAlign: "center" }}>{acc.id}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>₹ {acc.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AccountSummary;