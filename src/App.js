import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateCustomer from "./pages/CreateCustomer";
import CreateAccount from "./pages/CreateAccount";
import Transfer from "./pages/Transfer";
import AccountSummary from "./pages/AccountSummary";
import TransactionHistory from "./pages/TransactionHistory";

import ProtectedRoute from "./components/ProtectedRoute";
import { getUserRole } from "./utils/auth";

function App() {

  const role = getUserRole();

  return (
    <Router>
      <Routes>

        {/* ===== PUBLIC ROUTE ===== */}
        <Route path="/" element={<Login />} />

        {/* ===== DASHBOARD (ALL LOGGED USERS) ===== */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["ADMIN", "CUSTOMER"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ===== ADMIN ROUTES ===== */}
        <Route
          path="/create-customer"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <CreateCustomer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-account"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <CreateAccount />
            </ProtectedRoute>
          }
        />

        {/* ===== CUSTOMER ROUTES ===== */}
        <Route
          path="/account-summary"
          element={
            <ProtectedRoute allowedRoles={["CUSTOMER"]}>
              <AccountSummary />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transfer"
          element={
            <ProtectedRoute allowedRoles={["CUSTOMER"]}>
              <Transfer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedRoute allowedRoles={["CUSTOMER"]}>
              <TransactionHistory />
            </ProtectedRoute>
          }
        />

        {/* ===== INVALID ROUTES ===== */}
        <Route
          path="*"
          element={
            role ? <Navigate to="/dashboard" /> : <Navigate to="/" />
          }
        />

      </Routes>
    </Router>
  );
}

export default App;