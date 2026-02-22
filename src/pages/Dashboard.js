import React from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <h2>Welcome to NestBank</h2>
        <p>Select an option from the sidebar.</p>
      </div>
    </div>
  );
}

export default Dashboard;