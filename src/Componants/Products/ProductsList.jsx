import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import { addProduct, removeProduct } from '../../Redux/Reducers/ProductsData'
import axios from 'axios'
import { addfocData } from '../../Redux/Reducers/FocData'

const ProductsList = () => {
    const Products = useSelector((state)=> state.productData.Products)
    
    console.log(Products)
    const usedFor = [
      {value : 1, label : "For Office"},
      {value : 2, label : "For Production"},
    ]
    const Foc = useSelector((state) => state.focData.focData)
console.log(Foc)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getData = async ()=>{
      const res = await axios.get("https://mern-auth-liart.vercel.app/product")
      const FocData = await axios.get("https://mern-auth-liart.vercel.app/foc")
      dispatch(addfocData(FocData.data))
      
      
      console.log(res)
       dispatch(addProduct(res.data))
        }
  
    useEffect(()=>{
      getData()
    },[])
  
  const deleteData = async (id)=>{
    try{
      console.log(id)
    dispatch(removeProduct(id))
    const res = await axios.delete(`https://mern-auth-liart.vercel.app/product/productDelete/${id}`)
    console.log(res)
    
    }
    catch(err){
      console.log(err)
    }
  }
  
    let count = 1;
    const [currentPage, setCurrentPage] = useState(1);
        const ProductsPerPage = 10;
      
        // Calculate the indices for slicing the clients array
        const indexOfLastProducts = currentPage * ProductsPerPage;
        const indexOfFirstProducts = indexOfLastProducts - ProductsPerPage;
        const currentProducts = Products.slice(indexOfFirstProducts, indexOfLastProducts);
        console.log(currentProducts)
      
        // Calculate total pages
        const totalPages = Math.ceil(Products.length / ProductsPerPage);
      
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
  let label1
  
  return (
    <div>
      <div className="min-h-screen flex justify-center">
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-0">
        Products List
        </h1>
        <Link to="/Products/Add">
          <button className="bg-blue-600 p-2 md:p-3 m-1 rounded-lg text-white text-sm md:text-base">
            Add New
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full max-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-400 text-white uppercase text-xs md:text-sm leading-normal">
              <th className="py-3 px-4 md:px-6 text-left">S.no</th>
              <th className="py-3 px-4 md:px-6 text-left">Product Name</th>
              <th className="py-3 px-4 md:px-6 text-left">Used For</th>
              <th className="py-3 px-4 md:px-6 text-left">FOC</th>
              <th className="py-3 px-4 md:px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-xs md:text-sm font-light">
            {currentProducts.map((vendor, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">
                  {count++}
                </td>
                <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">
                  {vendor.productName}
                </td>
                  <td> {
                   usedFor.find((val) => val.value == vendor.usedFor)?.label  
                  }
                  </td>
                
                <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">
                {Foc.find((val) => val._id == vendor.FOC)?.name                }     
                </td>
                <td className="flex space-x-2 py-3 px-4 md:px-6">
                  <CiEdit
                    onClick={() => navigate(`/Products/Edit/${vendor._id}`)}
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
    </div>
  )
}

export default ProductsList
