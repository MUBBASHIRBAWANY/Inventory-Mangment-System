import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const VendorEditForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
const data1 = useSelector((state)=> state.vendorData.vendor)
const {id} = useParams()
const navigate = useNavigate()
const findVendor = data1.find((item)=> item._id == id)


  const onSubmit = async (data) =>{
     try{
      const res = await axios.put(`https://mern-auth-liart.vercel.app/vendor/upadateVender/${id}`,
      {
        Vendor_Name : data.Vendor_Name,
        Vendor_Email : data.Vendor_Email,
        Vendor_City : data.Vendor_City,
        Vendor_Address : data.Vendor_Address,
        Vendor_Contact_No : data.Vendor_Contact_No,
        CareOf : data.CareOf
      }
      
      )
      console.log(res)
      navigate("/vendor")
     }catch(err){
      console.log(err)
     }
  }


  return (
    <div>
    <h1 className="text-3xl font-bold text-center  text-gray-800 mb-6">Vendor Edit</h1>
    <div>
    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit(onSubmit)}> 
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={findVendor.Vendor_Name}
            {...register("Vendor_Name")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            defaultValue={findVendor.Vendor_Email}
            {...register("Vendor_Email")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">City</label>
          <input
            type="text  "
            defaultValue={findVendor.Vendor_City}
            {...register("Vendor_City")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Address</label>
          <input
            type="text"
            name="location"
            defaultValue={findVendor.Vendor_Address}
            {...register("Vendor_Address")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Contact Number</label>
          <input
            type="text"
            name="services"
            {...register("Vendor_Contact_No")}
            defaultValue={findVendor.Vendor_Contact_No}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">C/O</label>
          <input
            type="text"
            {...register("CareOf")}
            defaultValue={findVendor.CareOf}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Edit Vendor
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default VendorEditForm
