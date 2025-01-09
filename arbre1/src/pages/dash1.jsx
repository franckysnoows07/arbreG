import React from "react";
import Sidebar from "../components/sidebar";
import Dashboard from "../components/dashboard";

function Dash1() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Dashboard />
    </div>
  );
}

export default Dash1;
