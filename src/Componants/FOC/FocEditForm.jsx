import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


const FocEditForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const Foc = useSelector((state) => state.focData.focData)


    const { id } = useParams()
    console.log(id)
    const navigate = useNavigate()
    const FIndFoc = Foc.find((item) => item._id == id)
    console.log(FIndFoc)
    const onSubmit = async (data) => {
        console.log(data)
        try {
            const res = await axios.put(`https://mern-auth-liart.vercel.app/foc/updatefoc/${id}`,
                {
                    name: data.name,
                    convert_From: data.Convert_From,
                    convert_To: data.Convert_To,


                })

            console.log(res)
            navigate('/foc')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center  text-gray-800 mb-6">Edit Foc</h1>
                <div>
                    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                name="location"
                                defaultValue={FIndFoc.name}
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
                                defaultValue={FIndFoc.convert_From}
                                {...register("Convert_From")}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Convert To</label>
                            <input
                                type="number"
                                defaultValue={FIndFoc.convert_To}
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
                                Edit Foc
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FocEditForm
