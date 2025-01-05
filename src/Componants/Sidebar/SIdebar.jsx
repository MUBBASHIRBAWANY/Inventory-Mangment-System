import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../../Redux/Reducers/sidebarReducer';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ReportsOpen, SetupOpen, Transtionopen, toggleReports, toggleSetup, toggleTranstion } from '../../Redux/Reducers/SiderBarOtionFalse';
const SIdebar = () => {
    const navigate = useNavigate()
    const SidebarOpen =  useSelector((state)=> state.isSideBar.state)

const dispatch = useDispatch()
  const openTransaction = useSelector((state)=> state.sidebarOptions.transtionOpen)
  const openSetup = useSelector((state)=> state.sidebarOptions.Setup)
  const openReprts = useSelector((state)=> state.sidebarOptions.Reports)  
    const [isReports, setisReports] = useState(false);


  
      const toggleProfileDropdown = () => {
        if(openTransaction == false ){
          dispatch(Transtionopen(true))

        }
        else{
          dispatch(toggleTranstion(false))
        }
      };
      const toggleSetupDropdown = () => {
        if(openSetup == false ){
          dispatch(SetupOpen(true))

        }
        else{
          dispatch(toggleSetup(false))
        }
      };
      const toggleReportsDropdown = () => {
        console.log(openReprts)
        if(openReprts == false ){
          dispatch(ReportsOpen(true))

        }
        else{
          dispatch(toggleReports(false))
        }
      };
      const logout = () =>{
        console.log("logout")
        Cookies.remove("token")
        navigate("/login")
    }

  return (
    <div >
          <div className={`fixed h-dvh inset-y-0 left-0 transform ${
        SidebarOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 bg-gray-950 shadow-lg transition-transform duration-300 ease-in-out z-50 lg:relative lg:translate-x-0`}
    >
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-500">IMS</h2>
        <nav className="mt-4">
          <Link
            to='/'
            className="block py-2.5 px-4 rounded hover:bg-cyan-400 text-white"
          >
            Dashboard
          </Link>
          {/* Profile Section */}
          <div className="w-full">
            <button
              onClick={()=> toggleProfileDropdown()}
              className="w-full flex justify-between items-center py-2.5 px-4 rounded hover:bg-cyan-400 text-white focus:outline-none"
            >
              Transaction
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform transition-transform ${
                  openTransaction ? "rotate-180" : ""
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
            {openTransaction && (
              <div className="mt-2 ml-4">
                
                <Link
                  to='/PurchaseOrder'
                  className="block py-2 px-4 text-sm rounded hover:bg-cyan-400 text-white"
                >
                  PurchaseOrder
                </Link>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm rounded hover:bg-cyan-400 text-white"
                >
                  Less Inventory
                </a>
              </div>
            )}
          </div>
          {/* Setup Section */}
          <div className="w-full">
            <button
              onClick={toggleSetupDropdown}
              className="w-full flex justify-between items-center py-2.5 px-4 rounded hover:bg-cyan-400 text-white focus:outline-none"
            >
             Setup
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform transition-transform ${
                  openSetup ? "rotate-180" : ""
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
            {openSetup && (
              <div className="mt-2 ml-4">
                
                <Link
                  to="/Vendor"
                  className="block py-2 px-4 text-sm rounded hover:bg-cyan-400 text-white"
                >
                  Vendor
                </Link>
                <Link
                  to="/client"
                  className="block py-2 px-4 text-sm rounded hover:bg-cyan-400 text-white"
                >
                  Client
                </Link>
                 <Link
                  to="/foc"
                  className="block py-2 px-4 text-sm rounded hover:bg-cyan-400 text-white"
                >
                  Factor of Conversion
                </Link>
                <Link
                  to='/Products'
                  className="block py-2 px-4 text-sm rounded hover:bg-cyan-400 text-white"
                >
                  Product
                </Link>
              </div>
            )}
          </div>
          <div className="w-full">
            <button
              onClick={()=> toggleReportsDropdown()}
              className="w-full flex justify-between items-center py-2.5 px-4 rounded hover:bg-cyan-400 text-white focus:outline-none"
            >
             Reports
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform transition-transform ${
                  openReprts ? "rotate-180" : ""
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
            {openReprts && (
              <div className="mt-2 ml-4">
                
                <a
                  href="#"
                  className="block py-2 px-4 text-sm rounded hover:bg-cyan-400 text-white"
                >
                  Product Report
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm rounded hover:bg-cyan-400 text-white"
                >
                  Inventory Report
                </a> <a
                  href="#"
                  className="block py-2 px-4 text-sm rounded hover:bg-cyan-400 text-white"
                >
                  Vendor Report
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm rounded hover:bg-cyan-400 text-white"
                >
                  Client Report
                </a>
              </div>
            )}
          </div>
         
          <a onClick={logout}
            href="#"
            className="block py-2.5 px-4 mt-2 rounded hover:bg-cyan-400 text-white"
          >
            Logout
          </a>
        </nav>
      </div>
    </div>
    
    </div>
    
  )
}

export default SIdebar
    