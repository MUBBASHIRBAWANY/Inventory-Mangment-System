import React from 'react'
import SignupForm from '../../Componants/SignupForm/SignupForm'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate()

  const uidisValid = async () =>{
    try{
      const cookies = new Cookies();
      const token = cookies.get('token')
      const check = await axios.post("https://mern-auth-liart.vercel.app/user/profile",{
        headers : {
          authorization: token
        }
      })
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }
  uidisValid()

  return (
    <div>
      <SignupForm />
    </div>
  )
}

export default Signup
