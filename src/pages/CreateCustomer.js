import React, { useState } from "react";
import API from "../api/api";

function CreateCustomer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const createCustomer = async () => {
    try {
      const res = await API.post("/customers", {
        name,
        email
      });

      alert("Customer created with ID: " + res.data.id);
    } catch (err) {
      alert("Error creating customer");
    }
  };

  return (
    <div>
      <h2>Create Customer</h2>
      <input placeholder="Name"
        onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />
      <button onClick={createCustomer}>Create</button>
    </div>
  );
}

export default CreateCustomer;