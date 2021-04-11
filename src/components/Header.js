import React from "react";
import { NavLink } from "react-router-dom"

export const Header = function Header() {
  return (
    <nav>
      <div>
        <NavLink exact to="/">All cats</NavLink>
        <NavLink exact to="/favorites">Favorite cats</NavLink>
      </div>
    </nav>
  )
}
