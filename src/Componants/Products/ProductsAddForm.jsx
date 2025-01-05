import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useForm , Controller} from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from 'react-select'

const ProductsAddForm = () => {
  const navigate = useNavigate()
  const [Val, setVal] = useState(null);
  const Foc = useSelector((state) => state.focData.focData)


  const AllFoc = {
    options: Foc.map((item) => ({ value: item._id, label: item.name })),
  }

    
  
    
    
    

  const [focval, setFOCval] = useState(null)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const UsedFor = [
    { value: '1', label: 'for office' },
    { value: '2', label: 'for Production' }

  ]

  console.log(Foc)
  
  


  const onSubmit = async (data) =>{
    data.UsedFor = Val
    data.FOC = focval
    console.log(data)
     try{
       await axios.post("https://mern-auth-liart.vercel.app/product", {
       productName : data.productName,
       usedFor : data.UsedFor,
       FOC : data.FOC
     })

     navigate('/products') 
     }catch(err){
       console.log(err)
     }
  }
  return (
    <div>
        <div>
      <div>
      <h1 className="text-3xl font-bold text-center  text-gray-800 mb-6">Product Add</h1>
      <div>
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit(onSubmit)}> 
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              {...register("productName")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">UsedFor</label>
            <Select onChange={(vals)=> setVal(vals.value)} options={UsedFor} />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Foc</label>
            <Select onChange={(vals)=> setFOCval(vals.value)} options={AllFoc.options} />
            
          </div>
          
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Products
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default ProductsAddForm
