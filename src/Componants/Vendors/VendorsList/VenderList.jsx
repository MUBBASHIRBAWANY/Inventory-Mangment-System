import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, data, useNavigate } from 'react-router-dom';
import { addVendor, removeVendor } from '../../../Redux/Reducers/VendorsData';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const VenderList = () => {
  const vendors = useSelector((state) => state.vendorData.vendor)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getData = async () => {
    const res = await axios.get("https://mern-auth-liart.vercel.app/vendor")
    dispatch(addVendor(res.data))

  }

  useEffect(() => {
    getData()
  }, [])

  const deleteData = async (id) => {
    try {
      console.log(id)
      const res = await axios.delete(`https://mern-auth-liart.vercel.app/vendor/deleteVendor/${id}`)
      console.log(res)
      dispatch(removeVendor(id))
    }
    catch (err) {
      console.log(err)
    }
  }

  let count = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const vendorsPerPage = 10;

  // Calculate the indices for slicing the vendors array
  const indexOfLastVendor = currentPage * vendorsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
  const currentVendors = vendors.slice(indexOfFirstVendor, indexOfLastVendor);
  console.log(currentVendors)

  // Calculate total pages
  const totalPages = Math.ceil(vendors.length / vendorsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
      <div className="min-h-screen   flex justify-center">
      <div className="container mx-auto p-4">
          <div className='flex justify-between items-center'>
        <h1 className="text-xl font-bold text-center  text-gray-800 mb-6">Vendor List</h1>
        <Link to="/Vendor/Add"><button className='bg-blue-600 p-3 m-1 rounded-lg text-white'  >Add New</button> </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-400 text-white uppercase text-xs leading-normal">
                <th className="py-3 px-6 text-left">S.no</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Contact no</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {
                currentVendors.map((vendor, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left text-sm">{count++}</td>
                    <td className="py-3 px-6 text-left text-sm">{vendor.Vendor_Name}</td>
                    <td className="py-3 px-6 text-left text-sm">{vendor.Vendor_Contact_No}</td>
                    <td className="py-3 px-6 text-left text-sm">{vendor.Vendor_Email}</td>
                    <td className='flex'> <CiEdit onClick={()=>navigate(`/Vendor/Edit/${vendor._id}`)} className='text-violet-950 bg-slate-300 h-8 w-8' /> <MdDelete onClick={()=>deleteData(vendor._id)} className='h-8 w-8' /> </td>

                  </tr>
                ))
              }

            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default VenderList
