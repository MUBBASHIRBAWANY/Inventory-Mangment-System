import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const FocAddForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) =>{
      console.log(data)
        try{

        
      const res = await axios.post("https://mern-auth-liart.vercel.app/foc", {
        name : data.name,
        convert_From : data.Convert_From,
        convert_To : data.Convert_To,
  
      })
      navigate('/foc')
    }catch(err){
        console.log(err)
    }
    }
  return (
    <div>
    <div>
    <h1 className="text-3xl font-bold text-center  text-gray-800 mb-6">Client Foc</h1>
    <div>
    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit(onSubmit)}> 
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="location"
            {...register("name")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Convert From</label>
          <input
            type="number"
            name="services"
            {...register("Convert_From")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Convert To</label>
          <input
            type="number"
            {...register("Convert_To")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Foc
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>
  )
}

export default FocAddForm
