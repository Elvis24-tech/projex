import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink
import { FaTasks } from 'react-icons/fa';

function Header() {
  return (
    <header className="app-header">
      <Link to="/dashboard" className="logo"> {/* Use Link for the logo */}
        <FaTasks className="logo-icon" />
        <h1>ProjeX</h1>
      </Link>
      <nav>
        {/* Use NavLink to automatically add an 'active' class for styling */}
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/settings" className="button">Settings</NavLink>
      </nav>
    </header>
  );
}

export default Header;