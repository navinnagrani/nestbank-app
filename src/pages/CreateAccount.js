import React, { useState } from "react";
import API from "../api/api";
import Sidebar from "../components/Sidebar";

function CreateAccount() {

  const [customerId, setCustomerId] = useState("");
  const [balance, setBalance] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const createAccount = async () => {
    setMessage("");
    setError("");

    if (!customerId || !balance) {
      setError("All fields are required");
      return;
    }

    if (Number(balance) <= 0) {
      setError("Balance must be greater than zero");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/accounts", {
        customerId: Number(customerId),
        balance: Number(balance)
      });

      setMessage(`Account created successfully! Account ID: ${response.data.id}`);

      // Reset form
      setCustomerId("");
      setBalance("");

    } catch (err) {
      setError(
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Failed to create account"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="layout">

      <Sidebar />

      <div className="main-content">
        <div className="card">

          <h2 className="form-title">Create Account</h2>

          <p className="small-text">
            Provide Customer ID and initial deposit amount.
          </p>

          {message && <div className="message-success">{message}</div>}
          {error && <div className="message-error">{error}</div>}

          <input
            className="input"
            type="number"
            placeholder="Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />

          <input
            className="input"
            type="number"
            placeholder="Initial Balance"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />

          <button
            className="button"
            onClick={createAccount}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

        </div>
      </div>

    </div>
  );
}

export default CreateAccount;