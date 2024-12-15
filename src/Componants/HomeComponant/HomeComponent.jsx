import React, { useState } from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const HomeComponent = (data) => {
 const {name, imageUrl} = data.data
 const navigate = useNavigate();
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

const logout = () =>{
    console.log("logout")
    Cookies.remove("token")
    navigate("/login")
}


    // Toggle the sidebar
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
      };
  return (
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 bg-gray-950 shadow-lg transition-transform duration-300 ease-in-out z-50 lg:relative lg:translate-x-0`}
    >
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-500">IMS</h2>
        <nav className="mt-4">
          <a
            href="#"
            className="block py-2.5 px-4 rounded hover:bg-cyan-400 text-white"
          >
            Dashboard
          </a>
          {/* Profile Section */}
          <div className="w-full">
            <button
              onClick={toggleProfileDropdown}
              className="w-full flex justify-between items-center py-2.5 px-4 rounded hover:bg-cyan-400 text-white focus:outline-none"
            >
              Transaction
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform transition-transform ${
                  isProfileDropdownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isProfileDropdownOpen && (
              <div className="mt-2 ml-4">
                
                <a
                  href="#"
                  className="block py-2 px-4 text-sm rounded hover:bg-cyan-400 text-white"
                >
                  Add Inventory
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm rounded hover:bg-cyan-400 text-white"
                >
                  Less Inventory
                </a>
              </div>
            )}
          </div>
          {/* Settings Section */}
          <a
            href="#"
            className="block py-2.5 px-4 mt-2 rounded hover:bg-cyan-400 text-white"
          >
            Create Products
          </a>
          <a
            href="#"
            className="block py-2.5 px-4 mt-2 rounded hover:bg-cyan-400 text-white"
          >
            Reports
          </a>
          <a onClick={logout}
            href="#"
            className="block py-2.5 px-4 mt-2 rounded hover:bg-cyan-400 text-white"
          >
            Logout
          </a>
        </nav>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-800">Inventory Mangment System by MB Tech</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            
          </button>
          <img
            src={imageUrl}
            alt="Profile"
            className="h-20 w-20 rounded-full object-cover"
          />
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome {name} to IMS</h1>
        <p className="mt-4 text-gray-600">
          Dashboard
        </p>
      </div>
    </div>

    {/* Overlay for mobile */}
    {isSidebarOpen && (
      <div
        onClick={toggleSidebar}
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      ></div>
    )}
  </div>
);
}
export default HomeComponent
