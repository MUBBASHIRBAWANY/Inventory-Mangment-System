import React from 'react'
import OpensideBar from '../../Componants/Sidebar/OpensideBar'
import SIdebar from '../../Componants/Sidebar/SIdebar'
import Header from '../../Componants/Header/Header';
import FOCLIST from '../../Componants/FOC/FOCLIST';
import { useSelector } from 'react-redux';


const Foc = () => {
    const data1 = useSelector((state)=> state.userData)

  return (
    <div>
    <div>
        <div>
            <div className="flex h-screen  bg-gray-100">
                {/* Sidebar */}

                <SIdebar />
                <div className="flex-1 flex flex-col">
                    <Header data={data1} />
    <FOCLIST />
                              
                </div>
                <OpensideBar />
            </div>



        </div>
    </div>
</div>
  )
}

export default Foc
