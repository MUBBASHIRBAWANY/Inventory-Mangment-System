import React from 'react'
import SIdebar from '../../Componants/Sidebar/SIdebar'
import Header from '../../Componants/Header/Header';
import OpensideBar from '../../Componants/Sidebar/OpensideBar';
import { useSelector } from 'react-redux';
import ClientList from '../../Componants/Client/ClientList';

const Client = () => {
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

                <ClientList />                            
                        </div>
                        <OpensideBar />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Client
