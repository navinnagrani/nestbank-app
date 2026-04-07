import React, { useState } from "react";
import API from "../api/api";
import Sidebar from "../components/Sidebar";

function CardPayment() {

  const [form, setForm] = useState({
    accountId: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setMessage("");
    setError("");

    try {
      const res = await API.post("/payments/card", {
        accountId: Number(form.accountId),
        cardNumber: form.cardNumber,
        expiry: form.expiry,
        cvv: form.cvv,
        amount: Number(form.amount)
      });

      setMessage(res.data.message);

    } catch (err) {
      setError(err.response?.data?.error || "Payment failed");
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <div className="card">

          <h2>Pay with Card</h2>

          {message && <div className="message-success">{message}</div>}
          {error && <div className="message-error">{error}</div>}

          <input name="accountId" placeholder="Account ID" className="input" onChange={handleChange} />
          <input name="cardNumber" placeholder="Card Number" className="input" onChange={handleChange} />
          <input name="expiry" placeholder="MM/YY" className="input" onChange={handleChange} />
          <input name="cvv" placeholder="CVV" className="input" onChange={handleChange} />
          <input name="amount" placeholder="Amount" className="input" onChange={handleChange} />

          <button className="button" onClick={handleSubmit}>
            Pay Now
          </button>

        </div>
      </div>
    </div>
  );
}

export default CardPayment;