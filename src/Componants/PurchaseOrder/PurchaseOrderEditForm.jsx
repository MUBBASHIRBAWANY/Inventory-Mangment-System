"use strict";

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ListGuesser } from 'react-admin';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';

const PurchaseOrderEditForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data1, setData1] = useState([])
  const PurchaseOrderData = useSelector((state) => state.purchaseOrderSlice.PurchaseOrderData)
  const VendorData = useSelector((state) => state.vendorData.vendor)
  const Products = useSelector((state) => state.productData.Products)
  const { id } = useParams()
  const navigate = useNavigate()
  const [inputFields, setInputFields] = useState([]);
  const findPurchaseOrder = PurchaseOrderData.find((item) => item._id == id)
  const Foc = useSelector((state) => state.focData.focData)
  const [poProducts, setpoProducts] = useState([])
  const defaultOption = { value: VendorData.find((val) => val._id == findPurchaseOrder.vendor)._id, label: VendorData.find((val) => val._id == findPurchaseOrder.vendor).Vendor_Name };
  const [poVendor, setPoVendor] = useState(defaultOption);
  const [firstimeData, setFirsttimedata] = useState([])
  
  const id1 = useParams()
  console.log(id1.id)

  const findDuplicates = (arr, key) => {
    const occurrences = {};
    const duplicates = [];

    arr.forEach(item => {
      occurrences[item[key]] = (occurrences[item[key]] || 0) + 1;
      if (occurrences[item[key]] === 2) {
        duplicates.push(item);
      }
    });

    return duplicates;
  };

  const notify = () => toast("Product Duplicate In Purchase Order ");
  const onSubmit = async (data) => {
    const AllData = enteredData1.concat(enteredData)
    
    console.log(data)
    console.log(AllData)
    console.log(poVendor)
const duplicates = findDuplicates(AllData, 'productName')
if(duplicates.length > 0){
  return notify()
}
else{
    try{
     const res = await axios.put(`https://mern-auth-liart.vercel.app/purchaseorder/updatepo/${id1.id}`,{
          products : AllData,
          vendor : poVendor.value,
          Ponumber : findPurchaseOrder.Ponumber,
          purchaseDate : data.PoDate,
     })
     navigate('/PurchaseOrder')
    }catch(err){

    }
}
  }
  const addInputField = () => {
    setInputFields([...inputFields, { id: Date.now(), value: "" }]);
  };

  const allFindProducts = findPurchaseOrder.products.map((val) => val.productName)

  const findProductsFoc = () => {
    const aldata = []
    const findFoc = Products.filter((val) => allFindProducts.includes(val._id));

    findFoc.map((val) => aldata.push({ foc: val.FOC, productName: val._id }))
    setEnteredData1(findPurchaseOrder.products)
  }
  useEffect(() => {
    findProductsFoc()
    setpoProducts(findPurchaseOrder.products)

  }, [])

  console.log(data1)

  const getProvalue = (val) => {
    const FIndFoc = Products.find((valu) => valu._id == val)

    setData1({ foc: FIndFoc.FOC, productName: FIndFoc._id })

  }



  const [enteredData, setEnteredData] = useState([]);
  const [enteredData1, setEnteredData1] = useState([]);



  const removeInputField = (id, Pro) => {
    // Update inputFields by filtering out the removed field
    setpoProducts((prevFields) => prevFields.filter((field) => field.id !== id));

    // Update enteredData by filtering out the removed field
    setEnteredData1((prevData) => prevData.filter((item) => item.id !== id));
  };

  const removeInputField1 = (id, Pro) => {
    // Update inputFields by filtering out the removed field
    setInputFields((prevFields) => prevFields.filter((field) => field.id !== id));

    // Update enteredData by filtering out the removed field
    setEnteredData((prevData) => prevData.filter((item) => item.id !== id));
  };


  const check1 = (id) => {
    const val = { value: Products.find((val) => val._id === id)?._id, label: Products.find((val) => val._id === id)?.productName }
    return val
  }




  const enterData = (val, id, name, product) => {
    console.log(val, id, name, product)
    const findPro = Products.find((item) => item._id == product)
    const FilterFoc = Foc.find((check) => check._id == findPro.FOC)
    const val2 = FilterFoc.convert_From * FilterFoc.convert_To
    if (data1.productName == product) {
      console.log("mat")
    }
    const updatedEnteredData = enteredData1.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          value: val,
          name: val2,  // Update the name (calculated value)
        };
      }
      return item; // Keep other items unchanged
    });
    setpoProducts(updatedEnteredData)

    // Update the enteredData1 state with the new array
    setEnteredData1(updatedEnteredData);

  }



  const enterData1 = (val, id, name) => {

    const find = enteredData.find((item) => item.id == id)
    const FilterFoc = Foc.find((check) => check._id == data1.foc)
    console.log(FilterFoc)
    const val2 = FilterFoc.convert_From * FilterFoc.convert_To
    console.log(val2)
    if (find) {
      find.value = val
      find.name = val2  // update the name with the calculated value
      find.productName = data1.productName
      setEnteredData([...enteredData])
    }
    else {
      setEnteredData([...enteredData, { value: val, id: id, name: val2, productName: data1.productName }])
    }
  }



  const AllProducts = {
    options: Products.map((item) => ({ value: item._id, label: item.productName })),
  }
  const AllVendor = {
    options: VendorData.map((item) => ({ value: item._id, label: item.Vendor_Name })),
  }
  const check = Products.map((item) =>
    ({ value: item._id, Proname: item.productName })
  )


  return (
    <div>
      <ToastContainer />
      <div>
        <div>
          <h1 className="text-3xl font-bold text-center  text-gray-800 mb-6">Product Add</h1>
          <div>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">PoDate</label>
                <input
                  type="date"
                  defaultValue={findPurchaseOrder.purchaseDate}
                  name="name"
                  {...register("PoDate")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />


              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Vendor</label>

                <Select defaultValue={defaultOption} onChange={(vals) => setPoVendor(vals.value)} options={AllVendor.options} />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">PoNumber</label>
                <input
                  type="text"
                  name="PoNumber"
                  defaultValue={findPurchaseOrder.Ponumber}
                  disabled
                  {...register("PoNumber")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>

                <div>

                  <div className="flex w-screen ">
                    <h1 className='w-1/5 mx-3'> Add Products </h1>
                    <h1 htmlFor="" className='w-1/6 '>Qty</h1>
                    <h1> Net Qty</h1>
                  </div>

                </div>
                <div>

                </div>
                {poProducts.map((input, index) => (

                  <div className="flex w-screen space-x-3 ">

                    <select
                      id="dropdown" defaultValue={input}
                      onChange={(vals) => getProvalue(vals.target.value, input.id)}
                      className="w-1/5 mx-3"
                      value={input.productName}
                    >
                      {poProducts?.map((item) => (

                        <option
                          key={item.id}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={item.productName}
                        >
                          {Products.find((val) => val._id == item.productName).productName}
                        </option>
                      ))}
                    </select>
                    <div>
                      <input defaultValue={input.value} onChange={(e) => enterData(e.target.value, input.id, input.name, input.productName)} className="w-full px-4 py-2 border-cyan-950 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" />
                    </div>
                    <div>
                      <div className='px-4'>
                        <input type="text" value={input.name * input.value} />
                      </div>
                    </div>
                    <button type='button' className='bg-cyan-800 text-white px-5 rounded-lg' onClick={() => removeInputField(input.id)}>Delete</button>
                  </div>

                ))}
                {inputFields.map((input, index) => (
                  <div className="flex w-screen space-x-3" key={input.id}>
                    <select
                      id="dropdown"
                      onChange={(vals) => getProvalue(vals.target.value, input.id)}
                      className="w-1/5 mx-3"
                    >
                      <option value="">Select Product</option>
                      {check.map((item) => (
                        <option
                          key={item.value}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={item.value}
                        >
                          {item.Proname}
                        </option>
                      ))}
                    </select>
                    <div>
                      <input
                        defaultValue={0}
                        onChange={(e) => enterData1(e.target.value, input.id, data1)}
                        className="w-full px-4 py-2 border-cyan-950 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                      />
                    </div>
                    <div>
                      <input className="px-5"
                       value={enteredData.find((item) => item.id === input.id)?.value * 
                          enteredData.find((item) => item.id === input.id)?.name || 0}
                      />
                    </div>
                    <button
                      type="button"
                      className="bg-cyan-800 text-white px-5 rounded-lg"
                      onClick={() => removeInputField1(input.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <button
                  onClick={addInputField}
                  type='button'
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Add Product
                </button>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >

                  Add Po
                </button>
              </div>


            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PurchaseOrderEditForm
