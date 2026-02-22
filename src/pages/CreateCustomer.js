import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function CreateCustomer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createCustomer = async () => {
    setMessage("");
    setError("");
    try {
      const res = await API.post("/customers", {
        name,
        email
      });

      setMessage("Customer created successfully. ID: " + res.data.id);
      setName("");
      setEmail("");
    } catch (err) {
      setError(err.response?.data?.error || "Error creating customer");
    }
  };

  return (
  <div className="layout">
    <Sidebar />
    <div className="main-content">
    <div className="card">
      <h2>Create Customer</h2>
        {message && <div className="message-success">{message}</div>}
        {error && <div className="message-error">{error}</div>}

      <input
        className="input"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="input"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="button" onClick={createCustomer}>
        Create
      </button>
    </div>
  </div>
  </div>
);
}

export default CreateCustomer;