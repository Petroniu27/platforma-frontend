import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    nav('/login');
  };

  return (
    <nav className="navbar">
      {/* Logo sau titlu mic */}
      <div className="navbar-header">
        <NavLink to="/" className="nav-logo">AcadeMedica</NavLink>
        <button 
          className="burger" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Linkuri – ascunse pe mobil dacă nu e deschis burgerul */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" end className="nav-link">Acasă</NavLink>

        {user && (
          <NavLink to="/abonamente" className="nav-link">Abonamente</NavLink>
        )}

        {!user && (
          <>
            <NavLink to="/login" className="nav-link">Login</NavLink>
            <NavLink to="/register" className="nav-link">Register</NavLink>
          </>
        )}

        {user && (
          <>
            {(user.role === 'student' || user.role === 'admin') && (
              <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            )}
            {(user.role === 'prof' || user.role === 'admin') && (
              <NavLink to="/dashboard-profesor" className="nav-link">Lecții (prof)</NavLink>
            )}
            <button onClick={handleLogout} className="nav-link logout-btn">
              Logout
            </button>
          </>
        )}

        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </div>
    </nav>
  );
}
