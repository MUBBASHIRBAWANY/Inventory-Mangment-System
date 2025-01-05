import { useSelector } from 'react-redux';
import Header from '../../Componants/Header/Header';
import SIdebar from '../../Componants/Sidebar/SIdebar';
import OpensideBar from '../../Componants/Sidebar/OpensideBar';
import FocAddForm from '../../Componants/FOC/FocAddForm';


const FocAdd = () => {
    const data1 = useSelector((state)=> state.userData)

  return (
    <div>
    <div>
        <div className="flex h-screen  bg-gray-100">
            {/* Sidebar */}

            <SIdebar />
            <div className="flex-1 flex flex-col">
                <Header data={data1} />
<FocAddForm />
                          
            </div>
            <OpensideBar />
        </div>



    </div>
</div>
  )
}

export default FocAdd
