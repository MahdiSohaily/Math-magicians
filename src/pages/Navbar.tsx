import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navBar">
        <ul className={`menuNav`}>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/calculator">
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to="/quote">
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
