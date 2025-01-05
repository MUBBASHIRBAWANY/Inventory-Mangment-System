import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const ClientAddForm = () => {
    const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) =>{
    console.log(data)
    const res = await axios.post("https://mern-auth-liart.vercel.app/client", {
      client_Name : data.client_Name,
      client_Email : data.client_Email,
      client_City : data.client_City,
      client_Address : data.client_Address,
      client_Contact_No : data.client_Contact_No,
      CareOf : data.CareOf

    })
    navigate('/Client')
  }
  return (
    <div>
      <div>
      <h1 className="text-3xl font-bold text-center  text-gray-800 mb-6">Client Add</h1>
      <div>
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit(onSubmit)}> 
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              {...register("client_Name")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              {...register("client_Email")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">City</label>
            <input
              type="text  "
              {...register("client_City")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Address</label>
            <input
              type="text"
              name="location"
              {...register("client_Address")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Contact Number</label>
            <input
              type="text"
              name="services"
              {...register("client_Contact_No")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">C/O</label>
            <input
              type="text"
              {...register("CareOf")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Vendor
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default ClientAddForm
