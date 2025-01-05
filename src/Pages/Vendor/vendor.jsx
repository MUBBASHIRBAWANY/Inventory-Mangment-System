import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { redirect, useNavigate } from 'react-router-dom'
import SIdebar from '../../Componants/Sidebar/SIdebar'
import OpensideBar from '../../Componants/Sidebar/OpensideBar'
import Header from '../../Componants/Header/Header';
import VenderList from '../../Componants/Vendors/VendorsList/VenderList'


const Vendor = () => {
  
  const navigate = useNavigate()
 
  const data1 = useSelector((state)=> state.userData)
  console.log(data1)
  const validuse1 = useSelector((state)=> state.userValid.isValid)
   const userCheck = data1.user.name
   
  if(validuse1 == false){
    window.location.href = "/"

  }

  if(!userCheck){
    console.log("object")
    window.location.href = "/"
  }
  
 
  return (
    <div>
      <div>
      <div className="flex h-screen  bg-gray-100">
    {/* Sidebar */}

<SIdebar />
<div className="flex-1 flex flex-col">
<Header data={data1} />

<VenderList />
</div>
<OpensideBar />
</div>
      
      

    </div>
    </div>
  )
}

export default Vendor
