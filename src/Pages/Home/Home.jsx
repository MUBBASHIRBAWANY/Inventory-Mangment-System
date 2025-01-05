import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import Header from '../../Componants/Header/Header';
import { useNavigate } from 'react-router-dom';
import SIdebar from '../../Componants/Sidebar/SIdebar';
import OpensideBar from '../../Componants/Sidebar/OpensideBar';
import Contant from '../../Componants/Contant/Contant';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../Redux/Reducers/UserReduser'
import { usevalid } from '../../Redux/Reducers/isUserValid';


const Home = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
 const data1 = useSelector((state)=> state.userData)
 const validuse1 = useSelector((state)=> state.userValid.isValid)


  const uidisValid = async () =>{
    try{
      const cookies = new Cookies();
      const token = cookies.get('token')
      if(!token) {
        navigate('/login')
      };
      const check = await axios.post("https://mern-auth-liart.vercel.app/user/profile",{
        headers : {
          authorization: token
        }
      })
      dispatch(addUser(check.data.data.val))
      dispatch(usevalid())
      
      setData(check.data.data.val)
    }catch(err){
      navigate('/login')
      console.log(err)
    }
  }

  useEffect(() => {
    uidisValid()
  }, [])
  return (
    <div>
      <div className="flex h-screen  bg-gray-100">
    {/* Sidebar */}

<SIdebar />
<div className="flex-1 flex flex-col">
<Header data={data1} />

<Contant />
</div>
<OpensideBar />
</div>
      
      

    </div>
  )
}

export default Home
