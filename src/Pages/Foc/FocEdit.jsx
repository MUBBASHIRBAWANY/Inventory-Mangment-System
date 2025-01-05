import Header from '../../Componants/Header/Header';
import { useSelector } from 'react-redux'
import SIdebar from '../../Componants/Sidebar/SIdebar'
import OpensideBar from '../../Componants/Sidebar/OpensideBar';
import FocEditForm from '../../Componants/FOC/FocEditForm';

const FocEdit = () => {
    
    const data1 = useSelector((state)=> state.userData)
    
     
    
  return (
    <div>
      <div>
        <div className="flex h-screen  bg-gray-100">
          {/* Sidebar */}

          <SIdebar />
          <div className="flex-1 flex flex-col">
            <Header data={data1} />

            <FocEditForm />
          </div>
          <OpensideBar />
        </div>



      </div>
    </div>
  )
}

export default FocEdit
