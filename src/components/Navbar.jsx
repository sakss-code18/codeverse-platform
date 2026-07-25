import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaCode className="text-3xl text-orange-500" />
          <h1 className="text-2xl font-bold">
            Code<span className="text-orange-500">Verse</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "hover:text-orange-500 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "hover:text-orange-500 transition"
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "hover:text-orange-500 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "bg-orange-500 text-white px-5 py-2 rounded-lg"
                : "border border-orange-500 text-orange-500 px-5 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
            }
          >
            Login
          </NavLink>

        </div>

        {/* Mobile Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-orange-500"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-orange-50"
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-orange-50"
          >
            Courses
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-orange-50"
          >
            About
          </NavLink>

          <NavLink
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block m-4 text-center border border-orange-500 text-orange-500 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition"
          >
            Login
          </NavLink>

        </div>
      )}
    </nav>
  );
}

export default Navbar;