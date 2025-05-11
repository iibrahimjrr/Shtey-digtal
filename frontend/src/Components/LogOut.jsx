
import React from "react";

const LogOut= () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="logout-container">
        <button id="logoutLink" className="btnlogout" onClick={handleLogout}>Logout</button>;
    </div>
  )
};

export default LogOut;
