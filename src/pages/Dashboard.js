import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Bank Dashboard</h2>
      <Link to="/create-customer">Create Customer</Link><br/>
      <Link to="/create-account">Create Account</Link><br/>
      <Link to="/transfer">Transfer Money</Link>
    </div>
  );
}

export default Dashboard;