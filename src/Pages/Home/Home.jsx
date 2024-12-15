import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import HomeComponent from '../../Componants/HomeComponant/HomeComponent';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  
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
      <HomeComponent data={data} />
    </div>
  )
}

export default Home
