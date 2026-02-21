import React, { useState } from "react";
import API from "../api/api";

function CreateAccount() {
  const [customerId, setCustomerId] = useState("");
  const [balance, setBalance] = useState("");

  const createAccount = async () => {
    try {
      const res = await API.post("/accounts", {
        customerId: Number(customerId),
        balance: Number(balance)
      });

      alert("Account created with ID: " + res.data.id);
    } catch (err) {
      alert("Error creating account");
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <input placeholder="Customer ID"
        onChange={(e) => setCustomerId(e.target.value)} />
      <input placeholder="Initial Balance"
        onChange={(e) => setBalance(e.target.value)} />
      <button onClick={createAccount}>Create</button>
    </div>
  );
}

export default CreateAccount;