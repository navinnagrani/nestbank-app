import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();  // 🔥 required

  return (
    <>
      <div className="navbar">
        NestBank Dashboard
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>

      <div className="dashboard container">
        <h2>Welcome to Banking Portal</h2>

        <div className="grid">
          <div className="card-box" onClick={() => navigate("/create-customer")}>
            Create Customer
          </div>

          <div className="card-box" onClick={() => navigate("/create-account")}>
            Create Account
          </div>

          <div className="card-box" onClick={() => navigate("/transfer")}>
            Transfer Money
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;