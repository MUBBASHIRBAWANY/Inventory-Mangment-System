import OpensideBar from '../../Componants/Sidebar/OpensideBar'
import SIdebar from '../../Componants/Sidebar/SIdebar'
import Header from '../../Componants/Header/Header';
import { useSelector } from 'react-redux';
import ProductEditForm from '../../Componants/Products/ProductEditForm';

const ProductEdit = () => {
    const data1 = useSelector((state)=> state.userData)
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
    <div>
    <div className="flex h-screen  bg-gray-100">
  {/* Sidebar */}

<SIdebar />
<div className="flex-1 flex flex-col">
<Header data={data1} />

<ProductEditForm />
</div>
<OpensideBar />
</div>
    
    

  </div>
  </div>
    </div>
  )
}

export default ProductEdit
