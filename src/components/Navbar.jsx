import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <Link 
        to="/" 
        className="text-2xl font-bold text-orange-500"
      >
        CodeVerse
      </Link>

      <div className="flex gap-6 text-gray-700">

        <Link to="/" className="hover:text-orange-500">
          Home
        </Link>

        <Link to="/courses" className="hover:text-orange-500">
          Courses
        </Link>

        <Link to="/about" className="hover:text-orange-500">
          About
        </Link>

        <Link to="/login" className="hover:text-orange-500">
          Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;