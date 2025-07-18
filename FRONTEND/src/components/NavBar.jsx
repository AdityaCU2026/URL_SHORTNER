import React from "react";
import { Link } from "@tanstack/react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slice/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  console.log("NavBar user object:", user);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-extrabold text-white tracking-wide hover:text-yellow-300 transition duration-300"
            >
              URL Shortener
            </Link>
          </div>

          {}
          <div className="flex items-center space-x-6">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4 text-white">
                <span className="text-lg font-semibold">
                  Welcome, {user?.user?.name || "User"}
                </span>
                <button
                  onClick={onLogout}
                  className="bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 text-white px-5 py-2 rounded-lg text-sm font-semibold transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-white hover:bg-gray-100 text-indigo-700 font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
