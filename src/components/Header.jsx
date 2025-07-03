import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa';

function Header() {
  return (
    <header className="app-header">
      <Link to="/dashboard" className="logo">
        <FaTasks className="logo-icon" />
        <h1>ProjeX</h1>
      </Link>
      <nav>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Dashboard</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
        <NavLink to="/teams" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Teams</NavLink>
        <NavLink to="/settings" className={({ isActive }) => isActive ? "nav-link active button" : "nav-link button"}>Settings</NavLink>
      </nav>
    </header>
  );
}

export default Header;
