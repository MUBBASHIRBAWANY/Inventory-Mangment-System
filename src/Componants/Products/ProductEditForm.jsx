import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select'




const ProductEditForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const Products = useSelector((state)=> state.productData.Products)
    const Foc = useSelector((state) => state.focData.focData)

    const AllFoc = {
      options: Foc.map((item) => ({ value: item._id, label: item.name })),
    }  
    
    const options = [
    { value: 1, label: "For Office" },
    { value: 2, label: "For Production" },
  ];
  

    const {id} = useParams()
    console.log(id)
    const navigate = useNavigate()
    const FindProduct = Products.find((item)=> item._id == id)
    const defaultOption = { value: options.find((val)=> val.value == FindProduct.usedFor).value , label: options.find((val)=> val.value == FindProduct.usedFor).label };
    console.log(defaultOption)
    const defaultFoc = { value: AllFoc.options.find((val)=> val.value == FindProduct.FOC).value, label: AllFoc.options.find((val)=> val.value == FindProduct.FOC).label };
    console.log(defaultFoc)

  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [selectedFoc, setSelectedFoc] = useState(defaultFoc);
    const onSubmit = async (data) =>{
        try{
         const res = await axios.put(`https://mern-auth-liart.vercel.app/product/productUpdate/${id}`,
         {
            productName : data.name,
            usedFor : selectedOption.value,
            FOC : selectedFoc.value
        })
        
        console.log(data)

         console.log(res)
        navigate('/Products')
        }catch(err){
         console.log(err)
        }
     }
  return (
    <div>
        <div>
    <h1 className="text-3xl font-bold text-center  text-gray-800 mb-6">Product Edit</h1>
    <div>
    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit(onSubmit)}> 
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={FindProduct.productName}
            {...register("name")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">usedFor</label>
          <Select
        options={options}
        defaultValue={defaultOption} // Uncontrolled component: Initial default value
        value={selectedOption} // Controlled component: Current selected value
        onChange={(selected) => setSelectedOption(selected)} // Updates state when an option is selected
      />
      
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">FOC</label>
          <Select
        options={AllFoc.options}
        defaultValue={defaultFoc} // Uncontrolled component: Initial default value
        value={selectedFoc} // Controlled component: Current selected value
        onChange={(selected) => setSelectedFoc  (selected)} // Updates state when an option is selected
      />
        </div>
        <div>
          
        </div>
        <div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Edit Products
          </button>
        </div>
      </form>
    </div>
  </div>
    </div>
  )
}

export default ProductEditForm
