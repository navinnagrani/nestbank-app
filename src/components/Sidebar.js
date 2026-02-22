import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getUserRole } from "../utils/auth";

function Sidebar() {

  const navigate = useNavigate();
  const role = getUserRole();

  const token = localStorage.getItem("token");
  let username = "";

  if (token) {
    const decoded = jwtDecode(token);
    username = decoded.sub; // subject from JWT
  }

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="sidebar">

      {/* ===== TITLE ===== */}
      <div className="sidebar-title">NestBank</div>

      {/* ===== USER INFO ===== */}
      <div style={{ marginBottom: "20px", fontSize: "20px" }}>
        <div><strong>User:</strong> {username}</div>
        <div>
          <strong>Role:</strong>{" "}
          <span style={{
            background: role === "ADMIN" ? "#f59f00" : "#37b24d",
            padding: "3px 8px",
            borderRadius: "12px",
            fontSize: "12px"
          }}>
            {role}
          </span>
        </div>
      </div>

      {/* ===== COMMON DASHBOARD ===== */}
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        Dashboard
      </NavLink>

      {/* ===== ADMIN LINKS ===== */}
      {role === "ADMIN" && (
        <>
          <NavLink
            to="/create-customer"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            Create Customer
          </NavLink>

          <NavLink
            to="/create-account"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            Create Account
          </NavLink>
        </>
      )}

      {/* ===== CUSTOMER LINKS ===== */}
      {role === "CUSTOMER" && (
        <>
          <NavLink
            to="/account-summary"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            Account Summary
          </NavLink>

          <NavLink
            to="/transfer"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            Transfer Money
          </NavLink>
          
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            Transaction History
          </NavLink>
        </>
      )}

      {/* ===== LOGOUT ===== */}
      <div
        className="sidebar-link sidebar-logout"
        onClick={logout}
      >
        Logout
      </div>

    </div>
  );
}

export default Sidebar;