import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPurchaseOrderData, removePurchaseOrderData } from '../../Redux/Reducers/PurchaseOrder'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import { addVendor } from '../../Redux/Reducers/VendorsData'
import { addProduct } from '../../Redux/Reducers/ProductsData'
import { addfocData } from '../../Redux/Reducers/FocData'


const PurchaseOrderList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const PurchaseOrderData = useSelector((state) => state.purchaseOrderSlice.PurchaseOrderData)
  const VendorData = useSelector((state) => state.vendorData.vendor)

  console.log(PurchaseOrderData)
  
  const getotherData = async () => {
    const vendor = await axios.get("https://mern-auth-liart.vercel.app/vendor")
      const product = await axios.get("https://mern-auth-liart.vercel.app/product")
      const foc = await axios.get("https://mern-auth-liart.vercel.app/foc")
    dispatch(addVendor(vendor.data))
    dispatch(addProduct(product.data))
    dispatch(addfocData(foc.data))
  }
  const getData = async () => {
    try {
      const res = await axios.get("https://mern-auth-liart.vercel.app/purchaseOrder")
      dispatch(addPurchaseOrderData(res.data))

    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    getData()
    getotherData()
  }, [])



  let count = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const PoPerPage = 10;

  // Calculate the indices for slicing the clients array
  const indexOfLastPo = currentPage * PoPerPage;
  const indexOfFirstPo = indexOfLastPo - PoPerPage;
  const currentPo = PurchaseOrderData.slice(indexOfFirstPo, indexOfLastPo);
  console.log(currentPo)

  // Calculate total pages
  const totalPages = Math.ceil(PurchaseOrderData.length / PoPerPage);

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

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(`https://mern-auth-liart.vercel.app/purchaseorder/purchaseOrder/${id}`)
      dispatch(removePurchaseOrderData(id))
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="min-h-screen flex justify-center">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-0">
            Products List
          </h1>
          <Link to="/PurchaseOrder/add">
            <button className="bg-blue-600 p-2 md:p-3 m-1 rounded-lg text-white text-sm md:text-base">
              Add New
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full max-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-400 text-white uppercase text-xs md:text-sm leading-normal">
                <th className="py-3 px-4 md:px-6 text-left">PoNumber</th>
                <th className="py-3 px-4 md:px-6 text-left">Date</th>
                <th className="py-3 px-4 md:px-6 text-left">Vendor</th>
                <th className="py-3 px-4 md:px-6 text-left">Total Products</th>
                <th className="py-3 px-4 md:px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-xs md:text-sm font-light">
              {currentPo.map((vendor, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >

                  <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">
                    {vendor.Ponumber}
                  </td>
                  <td> {
                    <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">
                      {vendor.purchaseDate}
                    </td>
                  }
                  </td>

                  <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">
                    {VendorData?.find((item)=> item._id == vendor.vendor)?.Vendor_Name}
                  </td>
                  <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">
                    {vendor.products.length}
                  </td>
                  <td className="flex space-x-2 py-3 px-4 md:px-6">
                    <CiEdit
                      onClick={() => navigate(`/PurchaseOrder/Edit/${vendor._id}`)}
                      className="text-violet-950 bg-slate-300 h-6 w-6 md:h-8 md:w-8 cursor-pointer"
                    />
                    <MdDelete
                      onClick={() => deleteData(vendor._id)}
                      className="h-6 w-6 md:h-8 md:w-8 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-wrap justify-between items-center mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-3 py-2 md:px-4 md:py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700 text-sm md:text-base">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-2 md:px-4 md:py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseOrderList
