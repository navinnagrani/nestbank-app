import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateCustomer from "./pages/CreateCustomer";
import CreateAccount from "./pages/CreateAccount";
import Transfer from "./pages/Transfer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-customer" element={<CreateCustomer />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
    </Router>
  );
}

export default App;